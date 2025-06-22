import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-one',
    imports: [],
    templateUrl: './loader-one.component.html',
    styleUrls: ['./loader-one.component.scss']
})
export class LoaderOneComponent {

  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
