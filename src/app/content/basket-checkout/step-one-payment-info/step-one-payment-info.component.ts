import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentInfo } from 'src/app/entities/paymentInfo';
import { UserActions } from '../../profile/user.actions';
import { Product } from 'src/app/entities/product';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { BasketActions } from '../../basket/basket.actions';
import { Order } from 'src/app/entities/order';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-step-one-payment-info',
  templateUrl: './step-one-payment-info.component.html',
  styleUrls: ['./step-one-payment-info.component.scss']
})
export class StepOnePaymentInfoComponent implements OnInit {

  //Split this component up into 2 steps? UserInfo and PaymentInfo
  //This is where epay would be implemented.

  paymentForm;
  productsInBasket: Product[];
  loggedInUser: User;
  @Output() changeStep: EventEmitter<any> = new EventEmitter;//Data from child to parent

  constructor(private fb: FormBuilder, private userActions: UserActions, private ngRedux: NgRedux<IAppState>, private basketActions: BasketActions) { }

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

    //Get products in basket.
    this.ngRedux.select(x => x.basketProducts).subscribe((data) => {
      this.productsInBasket = data.productsInBasket;
    });

    //Get logged in user. Use authservice instead?
    this.ngRedux.select(x => x.user).subscribe((data) => {
      this.loggedInUser = data.loggedInUser;
    });
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
    paymentInfo.userId = this.loggedInUser.id;
    console.log(paymentInfo);

    //Init order object and set values.
    var theOrder = new Order();
    theOrder.paymentInfo = paymentInfo;
    theOrder.productsInBasket = this.productsInBasket;
    theOrder.userId = this.loggedInUser.id;
    console.log(theOrder);

    this.userActions.createOrder(theOrder);
    this.changeStep.emit(2); //Display step 2 in parent component.
    //Emit number and increment checkoutStep variable? Perhaps use another approach. routing?
  }
}
