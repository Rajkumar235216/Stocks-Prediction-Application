import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private press;
  constructor(private getprint: SearchService) { }

  ngOnInit() {
    this.press = this.getprint;
  }

}
/*export const stocks: Stocks[
{ symbol : 'INFY' , prices:[10,20,30] },
{ symbol: 'GOOGL' , prices: [100, 200, 300] },
{ symbol: 'APPL' , prices: [100, 205, 308] },
]*/
