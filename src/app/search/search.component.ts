import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Adresse, Properties } from './localization';
import './message/message.component';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // inject into the constructor the imported serchService
  constructor(
    @Inject(DOCUMENT) private doc: HTMLDocument,
    private searchService: SearchService
    ){
  }

  prop: Properties;
  // create an Observable for searhTerm subject service
  loc$: Observable<Adresse[]>;
  private searchTerms = new Subject<string>(); // create the subject emmiter

  public isOrigin = false;

  // Push a searchTerm into the observable subject stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // handle input list view
  toogleList(e: any): void {
    const target: HTMLElement = e.target;
    const isTarget = target.classList.contains('isOpen');
    const searchBox = this.doc.querySelector('.search__result');
    if (isTarget && searchBox){
      this.openSearchBox(target, searchBox);
    }else{
      this.closeSeachBox(target, searchBox);
    }
  }

  openSearchBox(target: any, searchBox: any): void{
    target.classList.toggle('isOpen');
    if (searchBox){
      searchBox.classList.add('closeList');
    }

  }

  closeSeachBox(target: any, searchBox: any): void{
    target.classList.toggle('isOpen');
    if (searchBox != null){
      searchBox.classList.remove('closeList');
    }
  }

  ngOnInit(): void {

    // foreach keystroke, call the "searchService" using the subject stream
    this.loc$ = this.searchTerms.pipe(
      // wait 100ms after each keystroke before considering the term
      debounceTime(100),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      // then use => searchProperties function
      switchMap((term: string) => this.searchService.searchProperties(term)),
    );
  }


  // clickOutside(){
  //   return fromEvent(document, 'click').subscribe(
  //       () => {
  //         const clickTarget = this.doc.querySelector('.search__result');
  //         this.notOrigin = clickTarget !== clickTarget;
  //       }
  //   );
  // }

}
