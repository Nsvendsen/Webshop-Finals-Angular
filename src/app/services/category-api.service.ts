import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private http: HttpClient) { }

  //API related methods. Subscribe to get the result.
  getAllCategories(){
    return this.http.get(environment.apiUrl + "/category");
  }

  getCategory(id: number){ //Perhaps string?
    return this.http.get(environment.apiUrl + "/category/" + id);
  }

  addCategory(category: Category){ 
    return this.http.post(environment.apiUrl + "/category", category);
  }

  deleteCategory(id: number){ //Perhaps string?
    return this.http.delete(environment.apiUrl + "/category/" + id); 
  }

  updateCategory(category: Category){ 
    return this.http.put(environment.apiUrl + "/category/" + category.id, category); 
  }
}
