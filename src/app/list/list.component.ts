import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// import {merge, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {GithubIssue} from './list';
import {ListService} from './list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {

  dataSource: ListService | null;
  data: GithubIssue[] = [];

  // resultsLength = 0;
  // isLoadingResults = true;
  // isRateLimitReached = false;

  first = 0;
  rows = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient, private service: ListService) { }

  ngAfterViewInit(): void {

    //this.service.subscribe();
    //this.dataSource = new ListService(this.httpClient);
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // merge(this.sort.sortChange, this.paginator.page)
    // .pipe(
    //   startWith({}),
    //   switchMap(() => {
    //     this.isLoadingResults = true;
    //     return this.dataSource.getRepoIssues(
    //       this.sort.active, this.sort.direction, this.paginator.pageIndex);
    //   }),
    //   map(data => {
    //     // Flip flag to show that loading has finished.
    //     this.isLoadingResults = false;
    //     this.isRateLimitReached = false;
    //     this.resultsLength = data.total_count;

    //     return data.items;
    //   }),
    //   catchError(() => {
    //     this.isLoadingResults = false;
    //     // Catch if the GitHub API has reached its rate limit. Return empty data.
    //     this.isRateLimitReached = true;
    //     return observableOf([]);
    //   })
    // ).subscribe(data => this.data = data);

  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.dataSource ? this.first === (this.dataSource.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.dataSource ? this.first === 0 : true;
  }
}


