import { Product} from './../models/product';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = environment.basePath1;


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }
  

  getProductId(id: any) {
    return this.http.get<Product>(`${this.baseUrl}products/${id}`);
  }

  getProductoCategoria(chocolate:string){
    return this.http.get<Product>(`${this.baseUrl}products/${chocolate}`)
  }


}
