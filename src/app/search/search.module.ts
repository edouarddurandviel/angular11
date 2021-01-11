import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { SearchRoutingModule } from './search-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule ,
  ],
  declarations: [
    SearchComponent
  ],
  providers: [SearchService],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
