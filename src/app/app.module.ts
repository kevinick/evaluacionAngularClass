import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DirColorDirective } from './dir-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    DirColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
