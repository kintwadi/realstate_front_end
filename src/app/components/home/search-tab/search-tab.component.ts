import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { SliderFilterLatestSaleComponent } from "../slider-filter-search/slider-filter-latest-sale/slider-filter-latest-sale.component";
import { ClassicFeaturedPropertyComponent } from "../classic/classic-featured-property/classic-featured-property.component";
import { ClassicPropertyServiceComponent } from "../classic/classic-property-service/classic-property-service.component";
import { ClassicLatestPropertyComponent } from "../classic/classic-latest-property/classic-latest-property.component";
import { ClassicVideoComponent } from "../classic/classic-video/classic-video.component";
import { ClassicHappyClientComponent } from "../classic/classic-happy-client/classic-happy-client.component";
import { ClassicBannerComponent } from "../classic/classic-banner/classic-banner.component";
import { ClassicAgentsComponent } from "../classic/classic-agents/classic-agents.component";
import { ClassicBrandComponent } from "../classic/classic-brand/classic-brand.component";
import { SearchTabHomeSectionComponent } from './search-tab-home-section/search-tab-home-section.component';

@Component({
    selector: 'app-search-tab',
    templateUrl: './search-tab.component.html',
    styleUrls: ['./search-tab.component.scss'],
    imports: [SliderFilterLatestSaleComponent, ClassicFeaturedPropertyComponent, ClassicPropertyServiceComponent,
        ClassicLatestPropertyComponent, ClassicVideoComponent, ClassicHappyClientComponent,
        ClassicBannerComponent, ClassicAgentsComponent, ClassicBrandComponent, SearchTabHomeSectionComponent]
})
export class SearchTabComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkThemeLogo = 'assets/images/logo/9.png';
  public title = 'search_tab';

  public theme_default6 = '#f35d43';
  public theme_default7 =  '#f34451';

  public latestPropertyData: latestForRent[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default6);
    document.documentElement.style.setProperty('--theme-default6',this.theme_default6);
    document.documentElement.style.setProperty('--theme-default7',this.theme_default7);

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestPropertyData = response.latestForRent.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default7');
  }
}
