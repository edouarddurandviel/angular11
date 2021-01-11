import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, tap, mergeMap, switchMap, map, toArray, filter} from 'rxjs/operators';
import { Localization, Properties, Feature, Adresse } from './localization';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private localizationUrl = 'https://apicarto.ign.fr/api/codes-postaux/communes';
  private adresses = 'https://api-adresse.data.gouv.fr/search';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  /* GET localiztion */
  searchCity(term: string): Observable<Localization[]> {
    if (!term.trim()) {
      return of([]); // if not terms suits to the search, return an empty array
    }
    return this.http.get<Localization[]>(`${this.localizationUrl}/${term}`)
    .pipe(
      tap(x => x.length ? this.log(`found "${term}" cities matching`) : this.log(`no city matching "${term}"`)),
      catchError(this.handleError<Localization[]>('searchCity', []))
    );
  }

   /* GET Properties */
   searchProperties(term: string): Observable<Adresse[]> {
    if (!term.trim()) {
      return of(); // if not terms suits to the search, return an empty array
    }
    return this.http.get<Adresse[]>(`${this.adresses}/?q=${term}`)
    .pipe(
      catchError(this.handleError<Adresse[]>('searchProperties'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

