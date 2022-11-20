import { Login } from './../models/login';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string= environment.basePath1;

  
  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post<User>(`${this.basePath}users`, user);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.basePath}users`);
  }
  
  getVerificar(id: any) {
    return this.http.get<User>(`${this.basePath}users/${id}`);
  }
  
  updateUser(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}users/${id}`, user);
  }



  signIn(login: Login): any {
    return this.http.post(`${this.basePath}users/signin`, login);
  }

  


  
  
}
