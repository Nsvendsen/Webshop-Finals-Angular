import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  showBanner: boolean = false;

  constructor(private authService: AuthService, private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    this.ngRedux.select(x => x.user).subscribe((data) => {
      this.currentUser = data.loggedInUser;
      if(data.loggedInUser) {
        console.log(data);
        this.isLoggedIn = true;
        if(data.loggedInUser.role === 'admin') {
          this.isAdmin = true;
        }
      }
    });

    // Make observables in authservice and subscribe?
    // this.isLoggedIn = this.authService.isLoggedIn;
    // if(this.authService.userRole === 'admin') {
    //   this.isAdmin = true;
    // }
    this.router.events.subscribe((val) => { //Perhaps fires 3 times because of 3 states.
      var path = this.router.url;
      if(path == '/'){
        this.showBanner = true;
      }
      else {
        this.showBanner = false;
      }
      console.log(path);
    });
  }


  
}


