import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-property-city-two',
    imports: [CarouselModule],
    templateUrl: './property-city-two.component.html',
    styleUrls: ['./property-city-two.component.scss']
})

export class PropertyCityTwoComponent {

  @Input() propertyInCity: propertyInCity[];

  public Options = {
    loop: true,
    nav: false,
    dots: true,
    responsive : {
      0 : {
        items : 1
      },
      475 : {
        items : 2
      },
      568 : {
        items : 3
      },
      1100 : {
        items : 4
      },
      1300 : {
        items : 5
      }
    }
  };
}
