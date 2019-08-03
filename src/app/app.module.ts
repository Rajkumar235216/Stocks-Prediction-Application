import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  InputComponent } from './input/input.component';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    StockComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
