import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { MessageService } from './message/message.service';
// interface
import { IntApplicants} from './applicants.interface';
// class
import { Applicants } from './applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  headers: Headers;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };


  getApplicantsList(): Observable<IntApplicants> {
    const applicantsUrl = `http://localhost:3000/applicants`;
    return this.http.get<IntApplicants>(applicantsUrl)
    .pipe(
      catchError(this.handleError<IntApplicants>('applicants'))
    );
  }

  getApplicant(id: number): Observable<IntApplicants> {
    const applicantsUrl = `http://localhost:3000/applicants/${id}`;
    return this.http.get<IntApplicants>(applicantsUrl)
    .pipe(
      catchError(this.handleError<IntApplicants>('applicants'))
    );
  }

  updateApplicant(id: number, model: Applicants): Observable<Applicants> {
    const applicantsUrl = `http://localhost:3000/applicants/${id}`;
    return this.http.put<Applicants>(applicantsUrl, model, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateApplicant', model))
    );
  }

  addApplicant(model: Applicants): Observable<Applicants> {
    const applicantsUrl = `http://localhost:3000/applicants`;
    return this.http.post<Applicants>(applicantsUrl, model, this.httpOptions)
    .pipe(
      catchError(this.handleError('addApplicant', model))
    );
  }

  deleteApplicant(id: number): Observable<{}> {
    const applicantsUrl = `http://localhost:3000/applicants/${id}`;
    return this.http.delete(applicantsUrl, this.httpOptions);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private handleErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

   /** message with the MessageService */
   private log(message: string) {
    this.messageService.add(`Applicant: ${message}`);
  }
}
