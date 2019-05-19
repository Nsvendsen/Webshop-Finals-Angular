import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentInfo } from 'src/app/entities/paymentInfo';
import { UserActions } from '../../profile/user.actions';

@Component({
  selector: 'app-step-one-payment-info',
  templateUrl: './step-one-payment-info.component.html',
  styleUrls: ['./step-one-payment-info.component.scss']
})
export class StepOnePaymentInfoComponent implements OnInit {

  //Split this component up into 2 steps? UserInfo and PaymentInfo
  //This is where epay would be implemented.

  paymentForm;
  constructor(private fb: FormBuilder, private userActions: UserActions) { }

  ngOnInit() {
    //Reactive form validation for EDIT
    this.paymentForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        country: ['', Validators.required],
        zipCode: ['', Validators.required],
        email: ['', Validators.required],
        cardNumber: ['', Validators.required],
        cardExpirationDate: ['', Validators.required],
        cvcNumber: ['', Validators.required]
      }
    );
  }

  onSubmit(paymentForm){
    if (paymentForm.valid){ 
      this.placeOrder(paymentForm);
    } 
    else {
      alert("Form is invalid!");
    }
    console.log(paymentForm) //Remove later
  }
  
  //Make paymentinfo a one to one relation with order? Never reuse paymentinfo?
  placeOrder(paymentForm){
    let paymentInfo = paymentForm.value as PaymentInfo;
    console.log(paymentInfo);
    this.userActions.createOrder(); //paymentInfo
    //Emit number and increment checkoutStep variable? Perhaps use another approach. routing?
  }
}
