import { Injectable } from '@angular/core';
import { print } from 'util';
import { StockComponent, Stocks } from './stock/stock.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Injectable()
export class SearchService {
  stock = Stocks;

  constructor() { }
 print(input: string): number[] {

  // tslint:disable-next-line: no-unused-expression

  switch (input) {
     case this.stock[0].symbol: return (this.stock[0].prices);
     break;
     case this.stock[1].symbol: return (this.stock[1].prices);
       break;
     case this.stock[2].symbol: return (this.stock[2].prices);
       break;
     default : return [0, 0];
       break;
   }
    }

}
