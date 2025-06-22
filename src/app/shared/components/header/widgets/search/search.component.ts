import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    imports: [CommonModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchOpen: boolean = false;

  openSearch(){
    this.searchOpen =! this.searchOpen;
  }
}
