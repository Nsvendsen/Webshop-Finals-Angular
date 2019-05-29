import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Product } from 'src/app/entities/product';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductsActions } from 'src/app/content/products/products.actions';

@Component({
  selector: 'app-create-or-edit-product-variation',
  templateUrl: './create-or-edit-product-variation.component.html',
  styleUrls: ['./create-or-edit-product-variation.component.scss']
})
export class CreateOrEditProductVariationComponent implements OnInit {

  isCreatingProductVariation: boolean = true;
  productVariationForm;
  oneProduct: Product;
  productEligibleForMultipleVariations: boolean;
  isProcessing: boolean;

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>, 
    private productApiService: ProductApiService, private productsActions: ProductsActions) { }

  ngOnInit() {
    //Reactive form validation for EDIT
    this.productVariationForm = this.fb.group(
      {
        in_stock: ['', Validators.required],
        sku: ['', Validators.required],
        productId: [''] 
      }
    );

    //Determine if user wants to edit a product variation.
    var pathSplit = this.router.url.split("/");
    var currentProductId = pathSplit[pathSplit.length-1];
    if (!isNaN(Number(currentProductId))){
      this.isCreatingProductVariation = false;

      //Try to find product in redux store.
      this.ngRedux.select(x => x.products).subscribe((data) => {
        if(data.allProducts.length > 1) {
          console.log(data);
          this.oneProduct = data.allProducts.find(x => x.id === Number(currentProductId));
          this.isProcessing = data.isProcessing; 
          if(this.oneProduct) {
            this.productVariationForm.setValue(this.oneProduct); //Pre-poppulate the form with the product values.
          }
        }
      });

      //If product was not found in redux store, try to get it from the database.
      if(!this.oneProduct) {
        this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => { //Use redux way???
          console.log(response);
          this.oneProduct = response;
          this.productVariationForm.setValue(this.oneProduct); //Pre-poppulate the form with the product values.
        }, error => {
          console.log("error!" + error);
        });
      }
      this.isProcessing = false; //To ensure the boolean is switched back to false.
    }

    if (this.oneProduct.category == 'shoes' || this.oneProduct.category == 'clothes'){
      this.productEligibleForMultipleVariations = true;
      this.productVariationForm.addControl('size', new FormControl('', Validators.required));
    }

  }

}
