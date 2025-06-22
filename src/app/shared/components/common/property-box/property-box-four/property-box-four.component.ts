import { Component, Input } from '@angular/core';
import { currency, latestForRent } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonPropertyBoxComponent } from './common-property-box/common-property-box.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-property-box-four',
    imports: [CarouselModule, CommonPropertyBoxComponent, CommonModule],
    templateUrl: './property-box-four.component.html',
    styleUrls: ['./property-box-four.component.scss']
})

export class PropertyBoxFourComponent {

  @Input() latestPropertyData: latestForRent[];
  @Input() propertyListingDataClassic: latestForRent;
  @Input() carousel: boolean = false;

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  };
}
