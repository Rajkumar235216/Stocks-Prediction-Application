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

// ---------------- Initializing an array of data ---------------
export const Stocks = [
  { symbol: 'INFY',  prices: [203.2, 180.1, 205.3, 205.4, 160.9, 200.01, 199.9] },
  { symbol: 'GOOGL', prices: [403.2, 380.1, 405.3, 405.4, 360.9, 400.01, 399.9] },
  { symbol: 'APPL',  prices: [303.2, 280.1, 305.3, 305.4, 260.9, 300.01, 299.9] }
];

