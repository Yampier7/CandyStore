import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../services/cart.service';
import { Product} from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Cart} from './../../models/cart';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  product!: Product;
  idProduct: any;
  
  cart!:Cart;
  idCart:any;
  carts!:Cart[];

  displayedColumns: string[] = [
    'picture',
    'title',  
    'precio',
    'action',
  ];

  dataSource = new MatTableDataSource<Cart>();

  constructor(
    private cartService:CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  
    this.cartService.getCars().subscribe((resp: any) => {
      console.log(resp);
      this.carts = resp;
    });

    this.getCarts();
    
  }

  getCarts() {
    this.cartService.getCars().subscribe((data: Cart[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  getTotalCost() {
    return this.carts.map(t => t.precio).reduce((acc, value) => acc + value, 0);
  }

  deleteCart(id: number) {
    this.cartService.deleteCart(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Cart) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('El Producto fue eliminado con exito!', '', {
        duration: 6000,
      });
    });
  }
  
}
