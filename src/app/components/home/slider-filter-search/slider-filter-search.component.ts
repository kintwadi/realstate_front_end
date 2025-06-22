import { Component } from '@angular/core';
import { SliderFilterAgentsComponent } from './slider-filter-agents/slider-filter-agents.component';
import { SliderFilterBannerComponent } from './slider-filter-banner/slider-filter-banner.component';
import { SliderFilterBrandComponent } from './slider-filter-brand/slider-filter-brand.component';
import { SliderFilterFeaturedPropertyComponent } from './slider-filter-featured-property/slider-filter-featured-property.component';
import { SliderFilterHappyClientComponent } from './slider-filter-happy-client/slider-filter-happy-client.component';
import { SliderFilterHomeSliderComponent } from './slider-filter-home-slider/slider-filter-home-slider.component';
import { SliderFilterLatestRentComponent } from './slider-filter-latest-rent/slider-filter-latest-rent.component';
import { SliderFilterLatestSaleComponent } from './slider-filter-latest-sale/slider-filter-latest-sale.component';
import { SliderFilterNewOfferComponent } from './slider-filter-new-offer/slider-filter-new-offer.component';
import { SliderFilterPropertyInCitiesComponent } from './slider-filter-property-in-cities/slider-filter-property-in-cities.component';

@Component({
    selector: 'app-slider-filter-search',
    imports: [SliderFilterHomeSliderComponent, SliderFilterLatestSaleComponent, SliderFilterFeaturedPropertyComponent,
        SliderFilterLatestRentComponent, SliderFilterNewOfferComponent, SliderFilterPropertyInCitiesComponent,
        SliderFilterBannerComponent, SliderFilterAgentsComponent, SliderFilterHappyClientComponent, SliderFilterBrandComponent,],
    templateUrl: './slider-filter-search.component.html',
    styleUrls: ['./slider-filter-search.component.scss']
})

export class SliderFilterSearchComponent {
  public themeLogo = 'assets/images/logo/6.png';
  public title = 'slider_filter_search';
  public footerClass = 'footer-brown';
  public headerClass = 'header-1 header-6';

  public theme_default8 = '#2c2e97';
  public theme_default9 = '#4b55c4';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default8);
    document.documentElement.style.setProperty('--theme-default8',this.theme_default8);
    document.documentElement.style.setProperty('--theme-default9',this.theme_default9);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default8');
    document.documentElement.style.removeProperty('--theme-default9');
  }
}
