import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { StockComponent } from '../stock/stock.component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    constructor(private getprint: SearchService) { }

      ngOnInit() {
           }
   }
