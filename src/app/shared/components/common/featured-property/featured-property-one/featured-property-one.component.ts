import { Component, Input } from '@angular/core';
import { currency, featuredProperty } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-featured-property-one',
    imports: [CarouselModule, RouterModule, FeatherIconsComponent,
        CommonModule, CurrencySymbolPipe],
    templateUrl: './featured-property-one.component.html',
    styleUrls: ['./featured-property-one.component.scss']
})

export class FeaturedPropertyOneComponent {

  @Input() title: string = '';
  @Input() featuredProperty: featuredProperty[];
  @Input() tagClass: string = '';
  @Input() currency:currency = this.propertyService.Currency;

  constructor(public propertyService: PropertyService) {}

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
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
