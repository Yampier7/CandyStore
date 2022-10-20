import { CartService } from '../../services/cart.service';
import { Product} from './../../models/product';
import { Cart } from './../../models/cart';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  myForm!: FormGroup;
  product!: Product;
  idProduct: any;
  

  public imagen!:string;

  Products!:Product[];
  

  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private cartService:CartService, 
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  
  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((resp: any) => {
      console.log(resp);
      this.Products = resp;
    });
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: [''],
      thumbnaiUrl: [''],
      pais: [''],
      precio: [''],
    });
  }

  saveProduct(cart:Cart){
     
    this.cartService.addProduct(cart).subscribe({
      next: (data) => {
        this.snackBar.open('El Producto fue registrado con exito!', '', {
          duration: 6000,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
   
}