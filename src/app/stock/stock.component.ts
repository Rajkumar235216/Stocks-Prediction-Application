import { Component, OnInit } from '@angular/core';
// import { SearchService } from '../search.service';

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
  { symbol: 'INFY',  prices: [203.2, 180.1, 205.3, 205.4, 160.9, 200.01, 199.9] },
  { symbol: 'GOOGL', prices: [203.2, 180.1, 205.3, 205.4, 160.9, 200.01, 199.9] },
  { symbol: 'APPL',  prices: [203.2, 180.1, 205.3, 205.4, 160.9, 200.01, 199.9] }
];

