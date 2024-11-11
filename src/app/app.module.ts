import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistroPontoComponent } from './components/registro-ponto/registro-ponto.component';
import { ListaRegistrosComponent } from './components/lista-registros/lista-registros.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RegistroPontoComponent,
    ListaRegistrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
