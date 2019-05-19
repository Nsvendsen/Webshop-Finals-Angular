// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userRole: string;

  // private userRoleSource = new BehaviorSubject(this.userRole);
  // currentUser = this.userRoleSource.asObservable(); //Subscribe on this to gain access to the data.

  // private isLoggedInSource = new BehaviorSubject(this.isLoggedIn);
  // isLoggedInUser = this.isLoggedInSource.asObservable(); //Subscribe on this to gain access to the data.

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  //If something returns observable and no one is subscribed the code is not run. 
  login(userRole): Observable<boolean> { //Observables is a part of rxjs libary. It does not work if we are not subscribed.
    return of(true).pipe(
      tap(val => {
        this.isLoggedIn = true;
        this.userRole = userRole; //Take userRole as param: login(userRole)
        console.log(this.isLoggedIn);
      }) 
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}