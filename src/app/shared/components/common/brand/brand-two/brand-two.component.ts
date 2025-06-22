import { Component, Input } from '@angular/core';
import { brand } from '../../../../../shared/interface/property';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-brand-two',
    imports: [CarouselModule],
    templateUrl: './brand-two.component.html',
    styleUrls: ['./brand-two.component.scss']
})

export class BrandTwoComponent {

  @Input() brandData: brand[];

  public Options: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      457:{
        items: 3
      },
      668 : {
        items : 4
      },
      1100:{
        items: 5
      },
      1266:{
        items: 6
      }
    }
  };
}
