
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Cart } from './../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  baseUrl:string=environment.basePath1;

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Cart[]>(`${this.baseUrl}details`);
  }

  addProduct(cart: Cart) {
    return this.http.post<Cart>(`${this.baseUrl}details`, cart);
  }

  getCarId(id: any) {
    return this.http.get<Cart>(`${this.baseUrl}details/${id}`);
  }

  deleteCart(id: any) {
    return this.http.delete<Cart>(`${this.baseUrl}details/${id}`);
  }
}
