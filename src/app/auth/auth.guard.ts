import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // use future route url through stateSnapshot
    const URL: string = state.url;

    console.log('AuthGuard#canActivate called' + ' isLogged: ' + this.authService.isLogged + ', called: ' + URL);

    // if it is logged continue or redirect to login page
    return this.checkLogin(URL);
  }

  checkLogin(url: string) {
    // first check if we are logged
    if (this.authService.isLogged){
      return true;
    }

    // second: STORE value to redirect url
    this.authService.redirectUrl = url;

    // end : redirect to login page
    // this.route.navigate(['/login']);
    return this.route.parseUrl('/login-page');
  }
}
