import { Injectable } from '@angular/core';
import { print } from 'util';
import { StockComponent, Stocks } from './stock/stock.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

export let z;

@Injectable()
export class SearchService {
  stock = Stocks;


  constructor() { }
 print(input: string) {
     z = input;

  }

  result(): number[] {

    // tslint:disable-next-line: no-unused-expression
    switch (z) {
      // tslint:disable-next-line: no-unused-expression
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
