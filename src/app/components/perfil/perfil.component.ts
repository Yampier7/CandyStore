import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './../../models/user';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  myForm!: FormGroup;
  idUser:any;
  apellido!: string;
  title!: string;
  correo!:string;
  contra!:string;
  user!:User;
  

  

  constructor(
    private fb: FormBuilder,
    public route:ActivatedRoute,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.loadUser();   
  }

  loadUser() {
    const aux = this.route.snapshot.paramMap.get('id');
    console.log("sidenav "+ aux)
    this.idUser = aux;
    this.userService.getVerificar(this.idUser).subscribe((data) => {
      this.user=data;
      this.title = this.user.title+' '+this.user.apellido;
      this.correo=this.user.correo;
      this.contra=this.user.contrasenia;
      
    }) 
  }
}
