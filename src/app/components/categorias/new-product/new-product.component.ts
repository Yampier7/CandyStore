import { Consult } from './../../../models/consult';
import { User } from './../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ConsultService } from 'src/app/services/consult.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public myForm: FormGroup;
  idUser:any;
  selectedFile: any;
  nameImg: string = '';
  
  products!:Product[];
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    public route: ActivatedRoute,
    private consultService:ConsultService
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id');
    console.log(this.idUser);
   this.reactiveForm(); 
   this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data:any) => {
        this.products=data;
        
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  }


  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      picture: ['', Validators.required],
      categoria: ['', Validators.required],
      pais: ['', Validators.required],
      account:['',Validators.required],
      precio: ['', Validators.required],
    });
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.nameImg = event.target.files[0].name;
  }

 

  saveProduct() {
    const product: Product = {
      id: 0,
      title: this.myForm.get('title')?.value,
      pais: this.myForm.get('pais')?.value,
      precio: this.myForm.get('precio')?.value,
      categoria: this.myForm.get('categoria')?.value,
      account:this.myForm.get('account')?.value,
      picture: this.selectedFile,
    };

    const uploadImageData = new FormData();
    uploadImageData.append('picture', product.picture, product.picture.name);
    uploadImageData.append('title', product.title);
    uploadImageData.append('pais', product.pais);
    uploadImageData.append('precio', product.precio.toString());
    uploadImageData.append('account', product.account.toString())
    uploadImageData.append('categoria', product.categoria);

    //TODO: llamado a metodo service registro producto
    
    this.productService.saveProduct(uploadImageData).subscribe({
      next: (data) => {
        this.snackBar.open('La categoría fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['home/categorias',this.idUser]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
