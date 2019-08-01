import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  InputComponent } from './input/input.component';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
