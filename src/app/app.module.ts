import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  InputComponent } from './input/input.component';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
