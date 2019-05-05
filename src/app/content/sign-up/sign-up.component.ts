import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';
import { User } from 'src/app/entities/user';
import { MustMatch } from './validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm;
  userBeingCreated: boolean = true;
  
  constructor(private fb: FormBuilder, private router: Router, private userApiService: UserApiService) { }

  ngOnInit() {
    this.userForm = this.fb.group(
      {
        id: [''],
        firstName: ['', [Validators.required]],
        lastName: ['',[Validators.required]],
        address: ['',[Validators.required]],
        zipCode: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        confirmedEmail: ['',[Validators.required, Validators.email]],
        gender: ['',[Validators.required]],
      } , {
        validator: MustMatch('email', 'confirmedEmail') // https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example. Burde password ikke tilføjes?
      }
    );
  }

  onSubmit(userForm){
    if (userForm.valid){
      console.log("user created with values" + this.userBeingCreated)
      if(this.userBeingCreated){
        this.createUser(userForm);
      }
      else if (!this.userBeingCreated){
        this.updateUserProfile(userForm);
      }
    }
    else{
      alert("invalid form")
    }
  }

  createUser(userForm){
    let user = userForm.value as User;
    this.userApiService.addUser(user).subscribe((response: User) => {
      console.log(response);
    }, error => {
      console.log("The following error was encountered:", error);
    });
    
    
  }

  updateUserProfile(userForm){
    let user = userForm.value as User;
    this.userApiService.updateUser(user).subscribe((response: User) => {
      console.log(response);
    }, error => {
      console.log("The following error was encountered:", error);
    });
  }

}

