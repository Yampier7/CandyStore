import { CarritoComponent } from './components/carrito/carrito.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

import { LoginComponent } from './components/login/login.component';
import { FaqsComponent } from './components/faqs/faqs.component';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'faqs', component:FaqsComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistrarComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
