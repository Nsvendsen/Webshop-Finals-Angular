import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-or-edit-item',
  templateUrl: './create-or-edit-item.component.html',
  styleUrls: ['./create-or-edit-item.component.scss']
})
export class CreateOrEditItemComponent implements OnInit {

  isCreatingItem: boolean;
  productForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //Reactive form validation
    this.productForm = this.fb.group(
      {
        //Not included in validion. start
        id:[''],
        isActive:[''], //active. is in isActive is sometimes removed.
        dateTimeCreated:[''],
        dateTimeEdited:[''],
        expirationDate: [''],
        // category:[''],
        //Not included in validation. end

        name: ['', [Validators.required, Validators.maxLength(100)]],
        inStock: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required] //Enable when category class is created?
      }
    );
  }

}
