import { Component, Input } from '@angular/core';
import { homeSectionSlider } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-slider-three',
    imports: [CarouselModule, RouterModule, CurrencySymbolPipe],
    templateUrl: './slider-three.component.html',
    styleUrls: ['./slider-three.component.scss']
})

export class SliderThreeComponent {

  @Input() homeSectionSliderData: homeSectionSlider[];

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };

  constructor(public propertyService: PropertyService) {}


}
