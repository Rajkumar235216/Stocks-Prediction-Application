import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export const Stocks = [
  { symbol: 'INFY', prices: [10, 20, 30] },
  { symbol: 'GOOGL', prices: [100, 200, 300] },
  { symbol: 'APPL', prices: [50, 150, 305] }
];

