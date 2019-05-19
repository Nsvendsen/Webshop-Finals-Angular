import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { UserApiService } from 'src/app/services/user-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class UserActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private userApiService: UserApiService, private authService: AuthService, private router: Router) {} 

  // This gives a strongly typed way to call an action.
//   static ADD_PRODUCT_TO_BASKET: string = 'ADD_PRODUCT_TO_BASKET'; 
//   static REMOVE_PRODUCT_FROM_BASKET: string = 'REMOVE_PRODUCT_FROM_BASKET'; 
    static LOGIN: string = 'LOGIN'; 
    static CREATE_ORDER: string = 'CREATE_ORDER'; 

    login(loginInformation): any {
        this.userApiService.login(loginInformation).subscribe(response => {
            console.log(response);
            this.ngRedux.dispatch({ //Save user in redux store for later use.
                type: UserActions.LOGIN,
                payload: response //Response is a user object
            });

            var user = response as User;
            this.authService.login(user.role).subscribe(result => { //Allow access in authguard.
                console.log("Logged in as user");
                this.router.navigate(['/']);
            }); //Allow access if credentials was found in the database.
        }, error => {
            console.log("Error!", error);
            //If web service fails.
        });
    }

    //Places order.
    createOrder(){
        // this.userApiService.login(loginInformation).subscribe(response => {
        //     console.log(response);
        //     this.ngRedux.dispatch({ //Save user in redux store for later use.
        //         type: UserActions.LOGIN,
        //         payload: response //Response is a user object
        //     });

        //     var user = response as User;
        //     this.authService.login(user.role).subscribe(result => { //Allow access in authguard.
        //         console.log("Logged in as user");
        //         this.router.navigate(['/']);
        //     }); //Allow access if credentials was found in the database.
        // }, error => {
        //     console.log("Error!", error);
        //     //If web service fails.
        // });
    }
  
}
