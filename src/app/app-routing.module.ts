import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'company-page', component: CompanyComponent},
  { path: 'login-page', component: LoginComponent},
  {
    path: 'contact-page',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'applicants',
    loadChildren: () => import('./applicants/applicants.module')
      .then(mod => mod.ApplicantsModule)
  },
  {
    path: 'search-destination',
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
