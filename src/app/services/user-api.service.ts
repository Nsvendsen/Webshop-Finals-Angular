import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  login(loginInfo){
    return this.http.post(environment.apiUrl + "/user/login.php", loginInfo);
  }

  getAllUsers(){
    return this.http.get(environment.apiUrl + "/user.php");
  }


  getUser(id: number){ 
    return this.http.get(environment.apiUrl + "/user.php/" + id);
  }

  getUserByEmail(email: string){ //ved ikke om denne giver mening
    return this.http.get(environment.apiUrl + "/user.php/" + email);
  }


  addUser(user: User){ 
    return this.http.post(environment.apiUrl + "/user.php", user);
  }


  deleteUser(id: number){ 
    return this.http.delete(environment.apiUrl + "/user.php/" + id); 
  }


  updateUser(user: User){ 
    return this.http.put(environment.apiUrl + "/user.php/" + user.id, user); 
  }
}
