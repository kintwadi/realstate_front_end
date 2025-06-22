import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-happy-client-two',
    imports: [CarouselModule],
    templateUrl: './happy-client-two.component.html',
    styleUrls: ['./happy-client-two.component.scss']
})

export class HappyClientTwoComponent {

  @Input() happyClientsData: happyClients[] = [];
  @Input() tagClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots:true,
    autoplay : true,
    autoplayTimeOut : 1500,
    responsive: {
      0 : {
        items: 1
      }
    }
  }
}
