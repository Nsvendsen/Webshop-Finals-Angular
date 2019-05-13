import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/entities/product';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-create-or-edit-product',
  templateUrl: './create-or-edit-product.component.html',
  styleUrls: ['./create-or-edit-product.component.scss']
})
export class CreateOrEditProductComponent implements OnInit {

  isCreatingProduct: boolean = true; //Make logic to set this correctly
  isProcessing: boolean;
  editProduct: Product;
  productForm;

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>, private productApiService: ProductApiService) { }

  ngOnInit() {
    //Reactive form validation
    this.productForm = this.fb.group(
      {
        //Not included in validion. start
        id: [''],
        isActive: [''], //active. 'is' in isActive is sometimes removed.
        dateTimeCreated: [''],
        dateTimeUpdated: [''],
        activeFromDate: [''],
        expirationDate: [''],
        discountPercent: [''],
        productVariations: [''],
        // category:[''],
        //Not included in validation. end

        name: ['', [Validators.required, Validators.maxLength(100)]],
        price: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required] 
      }
    );

    //Determine if user wants to edit a product.
    var pathSplit = this.router.url.split("/");
    var currentProductId = pathSplit[pathSplit.length-1];
    if (!isNaN(Number(currentProductId))) {
      this.isCreatingProduct = false;
      console.log("Edit");

      //Try to find product in redux store.
      this.ngRedux.select(x => x.products).subscribe((data) => {
        this.editProduct = data.allProducts.filter(x => x.id === Number(currentProductId))[0];
        this.isProcessing = data.isProcessing; 
        if(this.editProduct) {
          this.productForm.setValue(this.editProduct);
        }
      });

      //If product was not found in redux store, try to get it from the database.
      if(!this.editProduct) {
        this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => { //Use redux way???
          console.log(response);
          this.editProduct = response;
          this.productForm.setValue(this.editProduct);
        }, error => {
          console.log("error!" + error);
        });
      }

      this.isProcessing = false; //To ensure the boolean is switched back to false.
      //Pre-poppulate the form with the product values.
      // this.editProduct.id = Number(this.editProduct.id);
      // this.productForm.setValue(this.editProduct);
    }
    // else {
    //   this.isCreatingProduct = true;
    // }
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
      // this.router.navigate(['/products/' + product.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }
}
