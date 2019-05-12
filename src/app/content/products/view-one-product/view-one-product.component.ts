import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductsActions } from '../products.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { BasketActions } from '../../basket/basket.actions';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrls: ['./view-one-product.component.scss']
})
export class ViewOneProductComponent implements OnInit {

  oneProduct: Product;
  hasSizes: boolean;
  basketForm;

  constructor( private productApiService: ProductApiService, private router: Router, private productsActions: ProductsActions,
    private fb: FormBuilder, private basketActions: BasketActions) { } //Use productActions instead of productApiService

  ngOnInit() {
    var PathSplit = this.router.url.split("/");
    var currentProductId = PathSplit[PathSplit.length-1];
    console.log(currentProductId);
    this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => { //Use redux way
      console.log(response);
      this.oneProduct = response;
      if(this.oneProduct.productVariations[0].size){
        this.hasSizes = true;

        // this.basketForm = this.fb.group(
        //   {
        //     variationId: ['', Validators.required]
        //   }
        // );
      }
    }, error => {
      console.log("error!" + error);
    });

    this.basketForm = this.fb.group(
      {
        variationId: ['', Validators.required]
      }
    );
  }

  onSubmit(basketForm){
    if (basketForm.valid){
      this.addToBasket(basketForm);
    } 
    else {
      alert("Form is invalid!");
    }
    console.log(basketForm) //Remove later
  }
  
  addToBasket(basketForm){
    let productVariationId = basketForm.value.variationId; // Gets selected variation id, based on size choice.
    let filteredVariations = this.oneProduct.productVariations.filter(x => x.id == productVariationId); //Filter product variations in product.
    this.oneProduct.productVariations = filteredVariations; //Assign filtered array to product instance.
    this.basketActions.addToBasket(this.oneProduct); //Dispatch action with the changed product.
  }
  // addToBasketClick(productVariationId: any){

  // }
}
