import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3 role authority
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    var hasAccess = this.checkLogin(url);
    if(route.data && route.data.expectedRole){
      console.log(route.data);
      const expectedRole = route.data.expectedRole;
      if(this.authService.userRole !== expectedRole){
        hasAccess = false;
      }
    }
    return hasAccess;
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    
    console.log("Authguard says that isLoggedIn is: " + this.authService.isLoggedIn);
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['/signin']);
    return false;
  }
}
