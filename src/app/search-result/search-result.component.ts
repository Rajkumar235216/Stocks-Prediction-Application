import { Component, OnInit, Input } from '@angular/core';

// -------imported Search service class from search.service.ts--------
import { SearchService, z } from '../search.service';
// import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // created instance of class SearchServiceto use search seervice here.

  constructor(private getprint: SearchService) { }

  ngOnInit() {
  }

}
