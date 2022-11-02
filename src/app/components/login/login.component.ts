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
 


}
