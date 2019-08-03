import { Component, OnInit, Input } from '@angular/core';
import { SearchService, z } from '../search.service';
import { InputComponent } from '../input/input.component';

const a = z;
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private getprint: SearchService) { }


  ngOnInit() {
  }

}
