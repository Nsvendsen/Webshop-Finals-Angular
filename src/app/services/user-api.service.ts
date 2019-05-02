import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.apiUrl + "/user")
  }


  getUser(id: number){ 
    return this.http.get(environment.apiUrl + "/user/" + id);
  }

  getUserByEmail(email: string){ //ved ikke om denne giver mening
    return this.http.get(environment.apiUrl + "/user/" + email);
  }


  addUser(user: User){ 
    return this.http.post(environment.apiUrl + "/user", user);
  }


  deleteUser(id: number){ 
    return this.http.delete(environment.apiUrl + "/user/" + id); 
  }


  updateUser(user: User){ 
    return this.http.put(environment.apiUrl + "/user/" + user.id, user); 
  }
}
