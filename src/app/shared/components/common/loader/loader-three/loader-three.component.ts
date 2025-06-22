import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-three',
    imports: [],
    templateUrl: './loader-three.component.html',
    styleUrls: ['./loader-three.component.scss']
})
export class LoaderThreeComponent {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
