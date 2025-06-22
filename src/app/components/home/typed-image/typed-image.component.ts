import { Component } from '@angular/core';
import { SliderFilterLatestRentComponent } from "../slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent.component";
import { SliderFilterFeaturedPropertyComponent } from "../slider-filter-search/slider-filter-featured-property/slider-filter-featured-property.component";
import { SliderFilterBannerComponent } from "../slider-filter-search/slider-filter-banner/slider-filter-banner.component";
import { SliderFilterPropertyInCitiesComponent } from "../slider-filter-search/slider-filter-property-in-cities/slider-filter-property-in-cities.component";
import { SliderFilterHappyClientComponent } from "../slider-filter-search/slider-filter-happy-client/slider-filter-happy-client.component";
import { SliderFilterAgentsComponent } from "../slider-filter-search/slider-filter-agents/slider-filter-agents.component";
import { SliderFilterNewOfferComponent } from "../slider-filter-search/slider-filter-new-offer/slider-filter-new-offer.component";
import { ImageContentBrandComponent } from "../image-content/image-content-brand/image-content-brand.component";
import { TypedImageHomeSectionComponent } from './typed-image-home-section/typed-image-home-section.component';

@Component({
    selector: 'app-typed-image',
    templateUrl: './typed-image.component.html',
    styleUrls: ['./typed-image.component.scss'],
    imports: [SliderFilterLatestRentComponent, SliderFilterFeaturedPropertyComponent, SliderFilterBannerComponent,
        SliderFilterPropertyInCitiesComponent, SliderFilterHappyClientComponent, SliderFilterAgentsComponent,
        SliderFilterNewOfferComponent, ImageContentBrandComponent, TypedImageHomeSectionComponent]
})

export class TypedImageComponent {

  public headerClass: string = 'header-1 header-9 inner-page light-header shadow-cls';
  public headerLogo: string = 'assets/images/logo/10.png';
  public darkThemeLogo: string = 'assets/images/logo/1.png';
  public title: string = 'typed_image';
  public footerClass = 'footer-brown';

  public theme_default = '#6432b8';
  public theme_default2 = '#9516d7';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default);
    document.documentElement.style.setProperty('--theme-default2',this.theme_default2);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
