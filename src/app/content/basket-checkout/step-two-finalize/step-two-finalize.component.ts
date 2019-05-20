import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-step-two-finalize',
  templateUrl: './step-two-finalize.component.html',
  styleUrls: ['./step-two-finalize.component.scss']
})
export class StepTwoFinalizeComponent implements OnInit {

  loggedInUser: User;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    //Get logged in user. Use entered data from step one instead of redux?
    this.ngRedux.select(x => x.user).subscribe((data) => {
      this.loggedInUser = data.loggedInUser;
    });
  }

}
