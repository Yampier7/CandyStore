import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.css']
})
export class CompradorComponent implements OnInit {

  id:any;
  user!:number;
  constructor(
    public route:ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
    console.log("Perfil "+ variable)
    this.id=variable;
  }

}
