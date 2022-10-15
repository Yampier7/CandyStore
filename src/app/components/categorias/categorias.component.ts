import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Input() dataEntrante:any;

  public imagen!:string;

  Products!:Product[];

  constructor(private ProductService: ProductService) { }

  
  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((resp: any) => {
      console.log(resp);
      this.Products = resp;
    });
  }

   
}