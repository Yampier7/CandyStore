import { User } from './../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  myForm!: FormGroup;
  hide = true;
  id: any;

  constructor(
    private fb: FormBuilder,
    private userServices:UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      
      title: ['',[Validators.required, Validators.maxLength(20)]],
      apellido: ['',[Validators.required]],
      correo: ['',[Validators.required, Validators.email]],
      contrasenia: ['',[Validators.required]],
    });
  }
  
  saveUser(): void {
    const user: User = {
      id: this.id,
      title: this.myForm.get('title')!.value,
      apellido: this.myForm.get('apellido')!.value,
      correo: this.myForm.get('correo')!.value,
      contrasenia: this.myForm.get('contrasenia')!.value,
    };
    this.userServices.addUser(user)
      .subscribe({
        next: (data) => {
          this.snackBar.open('Registro Exitoso', '', {
            duration: 6000,
          });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

}
