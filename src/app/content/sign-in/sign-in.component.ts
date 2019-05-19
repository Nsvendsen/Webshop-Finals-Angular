import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { UserActions } from '../profile/user.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm;

  constructor(private fb: FormBuilder, private userActions: UserActions) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(loginForm){
    if (loginForm.valid){
      const email: string = loginForm.value.email as string;
      const password: string = loginForm.value.password as string;
      var loginInformation = {email: email, password: password}; //Make json object to send to backend.
      this.userActions.login(loginInformation);
    } else
      // alert("invalid");
      console.log(loginForm);
  }
}
