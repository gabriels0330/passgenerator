import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeradorSenhaComponent } from './gerador-senha/gerador-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    GeradorSenhaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  // A classe deve continuar sendo AppModule
