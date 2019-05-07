import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  //API related methods. Subscribe to get the result.
  getAllProducts(){
    return this.http.get(environment.apiUrl + "/product.php");
  }

  getProduct(id: number){ //Perhaps string?
    return this.http.get(environment.apiUrl + "/product.php/" + id);
  }

  addProduct(product: Product){ 
    return this.http.post(environment.apiUrl + "/product.php", product);
  }

  deleteProduct(id: number){ //Perhaps string?
    return this.http.delete(environment.apiUrl + "/product.php/" + id); 
  }

  updateProduct(product: Product){ 
    return this.http.put(environment.apiUrl + "/product.php/" + product.id, product); 
  }
}
