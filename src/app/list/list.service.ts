import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { GithubApi } from './list';

@Injectable({
  providedIn: 'root'
})
/** An example database that the data source uses to retrieve data for the table. */
export class ListService {
    constructor(private httpClient: HttpClient) {}

    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
      const href = 'https://api.github.com/search/issues';
      const requestUrl =
          `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

      return this.httpClient.get<GithubApi>(requestUrl);
    }
}
