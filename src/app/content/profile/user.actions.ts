import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Product } from 'src/app/entities/product';
import { UserApiService } from 'src/app/services/user-api.service';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class UserActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private userApiService: UserApiService) {} 

  // This gives a strongly typed way to call an action.
//   static ADD_PRODUCT_TO_BASKET: string = 'ADD_PRODUCT_TO_BASKET'; 
//   static REMOVE_PRODUCT_FROM_BASKET: string = 'REMOVE_PRODUCT_FROM_BASKET'; 
    static LOGIN: string = 'LOGIN'; 

    login(loginInformation): any {
        this.userApiService.login(loginInformation).subscribe(response => {
            console.log(response);
            this.ngRedux.dispatch({
                type: UserActions.LOGIN,
                payload: loginInformation
            });
            // this.authService.login().subscribe(result => {
            //   console.log("Logged in as user");
            //   this.router.navigate(['/portal']);
            // }); //Subscribe!
        }, error => {
            console.log("Error!", error);
            //If web service fails.
        });
    }
  
}
