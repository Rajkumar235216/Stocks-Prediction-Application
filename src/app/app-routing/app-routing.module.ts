import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { AppComponent } from '../app.component';

const routes: Routes = [

    {  path: 'result', component: SearchResultComponent },
  ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
