import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm;

  constructor(private fb: FormBuilder, private router: Router, private userApiService: UserApiService) { }

  ngOnInit() {
    this.userForm = this.fb.group(
      {
        id: [''],
        firstName: [''],
        lastName: [''],
        address: [''],
        zipCode: [''],
        email: [''],
        confirmedEmail: [''],
        gender: [''],
      }
    )
  }

}
