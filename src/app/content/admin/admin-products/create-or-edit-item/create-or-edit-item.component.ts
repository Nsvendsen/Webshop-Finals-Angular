import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/entities/item';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-or-edit-item',
  templateUrl: './create-or-edit-item.component.html',
  styleUrls: ['./create-or-edit-item.component.scss']
})
export class CreateOrEditItemComponent implements OnInit {

  isCreatingItem: boolean = true; //Make logic to set this correctly
  productForm;

  constructor(private fb: FormBuilder, private router: Router, private itemDataService: ItemDataService) { }

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
        category: ['', Validators.required] //Create category model???
      }
    );
  }

  onSubmit(productForm){
    if (productForm.valid){
      console.log("isCreatingItem" + this.isCreatingItem);
      if(this.isCreatingItem) {
        this.createNewProduct(productForm);
      }
      else if (!this.isCreatingItem) {
        this.updateExistingProduct(productForm);
      }
    } 
    else {
      alert("Form is invalid!");
    }
    console.log(productForm) //Remove later
  }
  
  createNewProduct(productForm){
    let item = productForm.value as Item;
    //Format date
    // var datePipe = new DatePipe("en-US");
    // item.expirationDate = datePipe.transform(item.expirationDate,'yyyy-MM-dd');
    this.itemDataService.addItem(item).subscribe((response: Item) => {  
      //If all goes well:
      console.log(response); //Remove later
      // this.router.navigate(['/products/' + response.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }

  //Not in use yet.
  updateExistingProduct(productForm){
    let item = productForm.value as Item;
    this.itemDataService.updateItem(item).subscribe((response: Item) => {  
      //If all goes well:
      console.log(response);
      this.router.navigate(['/products/' + item.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }
}
