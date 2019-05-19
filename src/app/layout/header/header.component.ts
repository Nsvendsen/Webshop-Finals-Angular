import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private ngRedux: NgRedux<IAppState>) { }

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
  }

}
