import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //componentes
    AppComponent
  ],
  imports: [
    //modulos, ruteo, formulario, peticiones
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    //servicios
  ],
  //de indicarle a Angular xq componente va a inicializar
  bootstrap: [AppComponent]
})

//es un archivo para registrar/matricular, todo lo que vamos a utilizar en Angular
export class AppModule { }
