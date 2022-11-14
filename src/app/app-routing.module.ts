import { EditComponent } from './components/edit/edit.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CompradorComponent } from './components/comprador/comprador.component';


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
  {path:'home/:id', component:CompradorComponent},
  {path:'home/categorias/:id', component:CategoriasComponent},
  {path:'home/faqs/:id', component:FaqsComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistrarComponent},
  {path:'home/carrito/:id', component:CarritoComponent},
  {path:'home/perfil/:id', component:PerfilComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
