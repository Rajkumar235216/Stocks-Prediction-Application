import { Injectable } from '@angular/core';
import { print } from 'util';

@Injectable()
export class SearchService {

  constructor() { }
 print(){
   const x = 5;
   alert(x)
   return  x;
 }

}
