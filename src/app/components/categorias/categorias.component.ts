import { CartService } from '../../services/cart.service';
import { Product} from './../../models/product';
import { Cart } from './../../models/cart';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
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
  

  Products!:Product[];
  

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private cartService:CartService, 
    private snackBar: MatSnackBar,
    private router: Router,
    public route: ActivatedRoute
    ) {}
  
  
  ngOnInit(): void {
    this.getProducts();
    this.reactiveForm();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('respuesta de productos: ', data);
        this.processProductResponse(data);
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  }

  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      //element.category = element.category.name;
      element.picture = 'data:image/jpeg;base64,' + element.picture;
      dateProduct.push(element);
    });

    this.Products=dateProduct;
  }


  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: [''],
      picture: [''],
      categoria: [''],
      pais: [''],
      account:[''],
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

  exportExcel() {
    this.productService.exportProduct().subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'products.xlsx';
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
      },
      (error: any) => {
        this.openSnackBar('No se pudo exportar el archivo', 'Error');
      }
    );
  }
   
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}