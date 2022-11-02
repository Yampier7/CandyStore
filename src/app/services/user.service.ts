import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base1: string= environment.base1;

  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post<User>(this.base1, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.base1);
  }

  
  
}
