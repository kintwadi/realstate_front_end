import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-happy-client-three',
    imports: [CarouselModule, RouterModule],
    templateUrl: './happy-client-three.component.html',
    styleUrls: ['./happy-client-three.component.scss']
})
export class HappyClientThreeComponent {

  @Input() happyClientsData: happyClients[] = [];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 1000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
