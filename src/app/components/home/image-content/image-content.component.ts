import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';
import { LayoutService } from '../../../shared/services/layout.service';
import { SliderFilterAgentsComponent } from "../slider-filter-search/slider-filter-agents/slider-filter-agents.component";
import { SliderFilterBannerComponent } from "../slider-filter-search/slider-filter-banner/slider-filter-banner.component";
import { SliderFilterFeaturedPropertyComponent } from "../slider-filter-search/slider-filter-featured-property/slider-filter-featured-property.component";
import { SliderFilterHappyClientComponent } from "../slider-filter-search/slider-filter-happy-client/slider-filter-happy-client.component";
import { SliderFilterLatestRentComponent } from "../slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent.component";
import { SliderFilterNewOfferComponent } from "../slider-filter-search/slider-filter-new-offer/slider-filter-new-offer.component";
import { SliderFilterPropertyInCitiesComponent } from "../slider-filter-search/slider-filter-property-in-cities/slider-filter-property-in-cities.component";
import { ImageContentHomeSectionComponent } from './image-content-home-section/image-content-home-section.component';
import { ImageContentBrandComponent } from './image-content-brand/image-content-brand.component';

@Component({
    selector: 'app-image-content',
    imports: [ImageContentHomeSectionComponent, SliderFilterLatestRentComponent,
        SliderFilterFeaturedPropertyComponent, SliderFilterBannerComponent, SliderFilterPropertyInCitiesComponent,
        SliderFilterHappyClientComponent, SliderFilterAgentsComponent, SliderFilterNewOfferComponent, ImageContentBrandComponent],
    providers: [LayoutService],
    templateUrl: './image-content.component.html',
    styleUrls: ['./image-content.component.scss']
})

export class ImageContentComponent {

  public themeLogo = 'assets/images/logo/1.png';
  public headerClass = 'header-1 fixed-header';
  public title = 'image_content';
  public footerClass = 'footer-brown';
  public blogData = blogData;

  public theme_default = '#6432b8';
  public theme_default2 = '#9516d7';

  constructor(private layoutService: LayoutService) {
    this.layoutService.headerStyle = 'simple';
    this.layoutService.headerLogo = this.themeLogo;
    this.layoutService.headerClass = this.headerClass;
    this.layoutService.headerFix = true;
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default', this.theme_default);
    document.documentElement.style.setProperty('--theme-default2', this.theme_default2);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
