import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-step-two-finalize',
  templateUrl: './step-two-finalize.component.html',
  styleUrls: ['./step-two-finalize.component.scss']
})
export class StepTwoFinalizeComponent implements OnInit {

  loggedInUser: User;
  constructor() { }

  ngOnInit() {
  }

}
