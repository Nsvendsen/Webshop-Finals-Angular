import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product, ProductVariation } from 'src/app/entities/product';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductsActions } from 'src/app/content/products/products.actions';

@Component({
  selector: 'app-create-or-edit-product',
  templateUrl: './create-or-edit-product.component.html',
  styleUrls: ['./create-or-edit-product.component.scss']
})
export class CreateOrEditProductComponent implements OnInit {

  isCreatingProduct: boolean = true; //Make logic to set this correctly
  isProcessing: boolean;
  editProduct: Product;
  productHasVariation: boolean;
  productForm;

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>, 
    private productApiService: ProductApiService, private productsActions: ProductsActions) { }

  ngOnInit() {
    //Reactive form validation for EDIT
    this.productForm = this.fb.group(
      {
        //Not included in validion. start
        //We do this to avoid errors when editing a product.
        id: [''],
        isActive: [''], 
        dateTimeCreated: [''],
        dateTimeUpdated: [''],
        activeFromDate: [''],
        expirationDate: [''],
        discountPercent: [''],
        productVariations: [''],
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
        if(data.allProducts.length > 1) {
          console.log(data);
          this.editProduct = data.allProducts.find(x => x.id === Number(currentProductId));
          this.isProcessing = data.isProcessing; 
          if(this.editProduct) {
            this.productForm.setValue(this.editProduct); //Pre-poppulate the form with the product values.
          }
        }
      });

      //If product was not found in redux store, try to get it from the database.
      if(!this.editProduct) {
        this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => { //Use redux way???
          console.log(response);
          this.editProduct = response;
          this.productForm.setValue(this.editProduct); //Pre-poppulate the form with the product values.
        }, error => {
          console.log("error!" + error);
        });
      }

      this.isProcessing = false; //To ensure the boolean is switched back to false.
      // this.editProduct.id = Number(this.editProduct.id);
      // this.productForm.setValue(this.editProduct);
    }
    else {
      this.isCreatingProduct = true;
      //Reactive form validation for CREATE
      // this.productForm = this.fb.group(
      //   {
      //     //Not included in validion. start
      //     //We do this to avoid errors when editing a product.
      //     id: [''],
      //     isActive: [''], 
      //     dateTimeCreated: [''],
      //     dateTimeUpdated: [''],
      //     activeFromDate: [''],
      //     expirationDate: [''],
      //     discountPercent: [''],
      //     productVariations: [''],
      //     //Not included in validation. end

      //     name: ['', [Validators.required, Validators.maxLength(100)]],
      //     price: ['', Validators.required],
      //     description: ['', Validators.required],
      //     category: ['', Validators.required],

      //     //ProductVariation validation
      //     inStock: ['', Validators.required],
      //     sku: ['', Validators.required],
      //     size: ['']
      //   }
      // );

      // https://stackoverflow.com/questions/47573797/dynamically-addcontrol-to-formgroup-angular-5
      this.productForm.addControl('inStock', new FormControl('', Validators.required));
      this.productForm.addControl('sku', new FormControl('', Validators.required));
      this.productForm.addControl('size', new FormControl(''));
    }
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
    let productVariation = new ProductVariation();
    product.productVariations = [];
    productVariation.id = null;
    productVariation.inStock = productForm.value.inStock;
    productVariation.sku = productForm.value.sku;
    productVariation.size = productForm.value.size;
    product.productVariations.push(productVariation);
    console.log(product);

    //Format date
    // var datePipe = new DatePipe("en-US");
    // item.expirationDate = datePipe.transform(item.expirationDate,'yyyy-MM-dd');
    // this.productApiService.addProduct(product).subscribe((response: Product) => {  
    //   //If all goes well:
    //   console.log(response); //Remove later
    //   // this.router.navigate(['/products/' + response.id]); //Navigate or stay?
    // }, error => {
    //   //If web service fails:
    //   console.log("Error!", error);
    // }); 
    this.productsActions.createProduct(product);

    //Use product.productVariations array to add one. Make component and render it in this html document.
  }

  updateExistingProduct(productForm){
    let product = productForm.value as Product;
    // this.productApiService.updateProduct(product).subscribe((response: Product) => {  
    //   //If all goes well:
    //   console.log(response);
    //   // this.router.navigate(['/products/' + product.id]); //Navigate or stay?
    // }, error => {
    //   //If web service fails:
    //   console.log("Error!", error);
    // }); 

    this.productsActions.updateProduct(product);
  }
}
