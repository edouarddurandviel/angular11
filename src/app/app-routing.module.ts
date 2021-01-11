import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'company-page', component: CompanyComponent},
  {
    path: 'applicants',
    loadChildren: () => import('./applicants/applicants.module')
      .then(mod => mod.ApplicantsModule)
  },
  {
    path: 'contact-page',
    loadChildren: () => import('./contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  // {
  //   path: 'list-page',
  //   loadChildren: () => import('./list/list.module')
  //     .then(mod => mod.ListModule)
  // },
  {
    path: 'search-products',
  loadChildren: () => import('./search/search.module')
    .then(mod => mod.SearchModule)
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
