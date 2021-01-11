import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { CdkTableModule } from '@angular/cdk/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatListModule } from '@angular/material/list';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListComponent],
  bootstrap: [ListComponent],
})
export class ListModule { }
