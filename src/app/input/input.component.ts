import { Component, OnInit } from '@angular/core';

// --------- imported Searcservice class from search.service.ts ---------
import { SearchService } from '../search.service';
// import { StockComponent } from '../stock/stock.component';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})


export class InputComponent implements OnInit {
   //  --------  created instance of SearchService class -------------

    constructor(private getprint: SearchService) { }
    ngOnInit() {
     }

// tslint:disable-next-line: member-ordering
}
