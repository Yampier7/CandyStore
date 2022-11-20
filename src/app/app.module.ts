import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

import { FaqsComponent } from './components/faqs/faqs.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CompradorComponent } from './components/comprador/comprador.component';
import { EditComponent } from './components/edit/edit.component';
import { NewProductComponent } from './components/categorias/new-product/new-product.component';
import { ConsultComponent } from './components/consult/consult.component';
import { BarraComponent } from './components/comprador/barra/barra.component';
import { ReportComponent } from './components/comprador/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CategoriasComponent,
    FaqsComponent,
    LoginComponent,
    RegistrarComponent,
    FooterComponent,
    CarritoComponent,
    PerfilComponent,
    CompradorComponent,
    EditComponent,
    NewProductComponent,
    ConsultComponent,
    BarraComponent,
    ReportComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
