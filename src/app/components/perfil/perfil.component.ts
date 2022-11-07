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
  contrasenia!:string;
  user!:User;

  users!:User[];

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'title',
    'apellido',  
    'correo',
    'contrasenia',
  ];
  constructor(
    private fb: FormBuilder,
    public route:ActivatedRoute,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id');
    console.log("haber"+this.idUser);
    this.userService.getUserId(this.idUser).subscribe((data) => {
      this.user = data;
      this.myForm = this.fb.group({
        id: this.idUser,
        title: [
          this.user.title
        ],
        apellido: [this.user.apellido],
        correo: [this.user.correo],
        contrasenia: [this.user.contrasenia],
      });
    });
  }

}
