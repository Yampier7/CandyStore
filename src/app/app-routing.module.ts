import { ConsultComponent } from './components/consult/consult.component';
import { NewProductComponent } from './components/categorias/new-product/new-product.component';
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
import { BarraComponent } from './components/comprador/barra/barra.component';
import { ReportComponent } from './components/comprador/report/report.component';

const routes: Routes = [
  
  {path:'inicio', component:InicioComponent},
  {path:'home/:id', component:CompradorComponent},
  {path:'home/estadistica/:id', component:BarraComponent},
  {path:'home/report/:id', component:ReportComponent},
  {path:'home/categorias/:id', component:CategoriasComponent},
  {path:'home/faqs/:id', component:FaqsComponent},
  {path:'home/cosult/:id', component:ConsultComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistrarComponent},
  {path:'home/carrito/:id', component:CarritoComponent},
  {path:'home/perfil/:id', component:PerfilComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'new/:id',component:NewProductComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
