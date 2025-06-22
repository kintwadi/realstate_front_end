import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    imports: [CommonModule],
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})

export class SubscribeComponent {

  public isSubscribe: boolean = false;

  openSubscribe() {
    this.isSubscribe = !this.isSubscribe;
  }
}
