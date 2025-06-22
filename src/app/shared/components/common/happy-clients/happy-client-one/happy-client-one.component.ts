import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-happy-client-one',
    imports: [CarouselModule, RouterModule, CommonModule],
    templateUrl: './happy-client-one.component.html',
    styleUrls: ['./happy-client-one.component.scss']
})

export class HappyClientOneComponent {

  @Input() happyClientsData: happyClients[] = [];
  @Input() tagClass: string = '';

  public Options = {
    loop: true,
    nav: true,
    dots:false,
    autoplay : true,
    autoplayTimeOut : 500,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    }
  }
}
