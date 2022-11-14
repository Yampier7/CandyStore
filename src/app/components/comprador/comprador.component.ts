import { User } from './../../models/user';
import { PerfilComponent } from './../perfil/perfil.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})
export class CompradorComponent implements OnInit {

  idUser:any;
  variable!:number;
  constructor(
    public route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const aux= this.route.snapshot.paramMap.get('id');
    this.idUser=aux;  
  }

}
