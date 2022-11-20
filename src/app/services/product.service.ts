import { Product} from './../models/product';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const basePath1 = environment.basePath1;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http: HttpClient) { }

  getProducts() {
    const endpoint = `${basePath1}products`;
    return this.http.get<Product[]>(endpoint);
  }
  
  saveProduct(product: any) {
    const endpoint = `${basePath1}products`;
    return this.http.post<Product[]>(endpoint, product);
  }
  
  exportProduct() {
    const endpoint = `${basePath1}products/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }

  searchOthers(categoria: string, title: string) {
    return this.http.get<Product[]>(
      `${basePath1}products/search/others?categoria=${categoria}&title=${title}`
    );
  }

  callProcedureOrFunction() {
    return this.http.get<any[]>(`${basePath1}consults/callProcedure`);
  }
}
