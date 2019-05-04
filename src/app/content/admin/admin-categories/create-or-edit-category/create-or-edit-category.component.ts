import { Component, OnInit } from '@angular/core';
import { CategoryApiService } from 'src/app/services/category-api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-create-or-edit-category',
  templateUrl: './create-or-edit-category.component.html',
  styleUrls: ['./create-or-edit-category.component.scss']
})
export class CreateOrEditCategoryComponent implements OnInit {

  isCreatingCategory: boolean = true; //Make logic to set this correctly
  categoryForm;

  constructor(private fb: FormBuilder, private router: Router, private categoryApiService: CategoryApiService) { }

  ngOnInit() {
    //Reactive form validation
    this.categoryForm = this.fb.group(
      {
        //Not included in validion. start
        id:[''],
        name: ['', [Validators.required, Validators.maxLength(100)]]
      }
    );
  }

  onSubmit(categoryForm){
    if (categoryForm.valid){
      if(this.isCreatingCategory) {
        this.createNewProduct(categoryForm);
      }
      else if (!this.isCreatingCategory) {
        this.updateExistingProduct(categoryForm);
      }
    } 
    else {
      alert("Form is invalid!");
    }
    console.log(categoryForm) //Remove later
  }
  
  createNewProduct(productForm){
    let category = productForm.value as Category;
    this.categoryApiService.addCategory(category).subscribe((response: Category) => {  
      //If all goes well:
      console.log(response); //Remove later
      // this.router.navigate(['/categories/' + response.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }

  //Not in use yet.
  updateExistingProduct(productForm){
    let category = productForm.value as Category;
    this.categoryApiService.updateCategory(category).subscribe((response: Category) => {  
      //If all goes well:
      console.log(response);
      // this.router.navigate(['/categories/' + category.id]); //Navigate or stay?
    }, error => {
      //If web service fails:
      console.log("Error!", error);
    }); 
  }

}
