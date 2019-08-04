import { Injectable } from '@angular/core';
import { print } from 'util';

//  -------- Imported stocks array and StockComponent from stock.component.ts file-------------
import { StockComponent, Stocks } from './stock/stock.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

//  ---------- global variable 'z' ---------
export let z ;

@Injectable()
export class SearchService {

  // --------- created instance of Stocks array from stock.component ------
  stock = Stocks;


  constructor() { }

  //  -----------  On click of search button this function called.----------

 print(input: string) {
     z = input;   //  user input is assigned to global variable to use in different html template
    // tslint:disable-next-line: max-line-length
    document.getElementById('suggestion').innerHTML = '<strong style = \'font-size:20px\' \; \' margin-top:50px\'>You Searched for ...</strong>';
   }


  // ------------  search results logic defined in this function after clicking of the search button ------------
  result(): number[] {

     // tslint:disable-next-line: no-unused-expression
     // ---- based on company searched its repected value is returned ----------
    switch (z) {
      case this.stock[0].symbol:
        document.getElementById('company').innerHTML = z;
        return (this.stock[0].prices);
        break;
      case this.stock[1].symbol:
        document.getElementById('company').innerHTML = z;
        return (this.stock[1].prices);
        break;
      case this.stock[2].symbol:
        document.getElementById('company').innerHTML = z;
        return (this.stock[2].prices);
        break;
    }
  }

}
