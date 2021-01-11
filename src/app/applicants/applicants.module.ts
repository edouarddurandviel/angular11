import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApplicantsService } from './applicants.service';
import { ApplicantsRoutingModule} from './applicants-routing.module';
import { ApplicantsComponent } from './view/applicants.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';


@NgModule({
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ApplicantsComponent,
    EditComponent,
    AddComponent
  ],
  providers: [ApplicantsService],
  bootstrap: [ApplicantsComponent]
})
export class ApplicantsModule { }
