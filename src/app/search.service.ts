import { Injectable } from '@angular/core';
import { print } from 'util';
import { StockComponent, Stocks } from './stock/stock.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

export let z;

@Injectable()
export class SearchService {
  stock = Stocks;


  constructor() { }
 print(input: string): number[] {

  // tslint:disable-next-line: no-unused-expression
  z = input;
  switch (input) {

     case this.stock[0].symbol:
      document.getElementById('company').innerHTML = input;
      // tslint:disable-next-line: no-unused-expression
      return (this.stock[0].prices);
     break;
     case this.stock[1].symbol:
      document.getElementById('company').innerHTML = input;
       return (this.stock[1].prices);
       break;
     case this.stock[2].symbol:
      document.getElementById('company').innerHTML = input;
      return (this.stock[2].prices);
       break;

   }
    }

  result(): number[] {

    // tslint:disable-next-line: no-unused-expression
    switch (z) {

      case this.stock[0].symbol:
        document.getElementById('company').innerHTML = z;
        // tslint:disable-next-line: no-unused-expression
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
