import { environment } from './../../../environments/environment';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  myForm!: FormGroup;
  user!:User;
  id:any;
  idUser!:any;

  constructor(
    private fb:FormBuilder, 
    private userServices: UserService,
    private snackBar: MatSnackBar,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      correo: ['',[Validators.required, Validators.email]],
      contrasenia: ['',[Validators.required]],
    });
  }
 
  login(){
    this.userServices.getUsers()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.correo === this.myForm.value.correo && a.contrasenia === this.myForm.value.contrasenia
      });
      if(user){
        this.snackBar.open('Login correcto!', '', {
          duration: 6000,
        });
        this.myForm.reset();
        this.router.navigate(['home/perfil',user.id]);
        this.idUser=user.id
      }else{
        this.snackBar.open('Correo o/y contraseña erronea!', '', {
          duration: 6000,
        });
      }
    },err=>{
      alert("No eres tu, somo nosotros!")
    })
  }

}
