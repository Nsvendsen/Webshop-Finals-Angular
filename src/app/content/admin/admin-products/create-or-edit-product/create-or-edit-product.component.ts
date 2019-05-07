import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-create-or-edit-product',
  templateUrl: './create-or-edit-product.component.html',
  styleUrls: ['./create-or-edit-product.component.scss']
})
export class CreateOrEditProductComponent implements OnInit {

  isCreatingProduct: boolean = true; //Make logic to set this correctly
  productForm;

  constructor(private fb: FormBuilder, private router: Router, private productApiService: ProductApiService) { }

  ngOnInit() {
    //Reactive form validation
    this.productForm = this.fb.group(
      {
        //Not included in validion. start
        id:[''],
        isActive:[''], //active. 'is' in isActive is sometimes removed.
        dateTimeCreated:[''],
        dateTimeEdited:[''],
        activeFromDate:[''],
        expirationDate: [''],
        // category:[''],
        //Not included in validation. end

        name: ['', [Validators.required, Validators.maxLength(100)]],
        price: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required] 
      }
    );
  }

  onSubmit(productForm){
    if (productForm.valid){
      if(this.isCreatingProduct) {
        this.createNewProduct(productForm);
      }
      else if (!this.isCreatingProduct) {
        this.updateExistingProduct(productForm);
      }
    } 
    else {
      alert("Form is invalid!");
    }
    console.log(productForm) //Remove later
  }
  
  createNewProduct(productForm){
    let product = productForm.value as Product;
    //Format date
    // var datePipe = new DatePipe("en-US");
    // item.expirationDate = datePipe.transform(item.expirationDate,'yyyy-MM-dd');
    this.productApiService.addProduct(product).subscribe((response: Product) => {  
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
    let product = productForm.value as Product;
    this.productApiService.updateProduct(product).subscribe((response: Product) => {  
      //If all goes well:
      console.log(response);
      this.router.navigate(['/products/' + product.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }
}
