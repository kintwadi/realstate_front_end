import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { ClassicFeaturedPropertyComponent } from "../classic/classic-featured-property/classic-featured-property.component";
import { ClassicPropertyServiceComponent } from "../classic/classic-property-service/classic-property-service.component";
import { ClassicPropertyListingComponent } from "../classic/classic-property-listing/classic-property-listing.component";
import { ClassicVideoComponent } from "../classic/classic-video/classic-video.component";
import { ClassicAgentsComponent } from "../classic/classic-agents/classic-agents.component";
import { ClassicBannerComponent } from "../classic/classic-banner/classic-banner.component";
import { ClassicHappyClientComponent } from "../classic/classic-happy-client/classic-happy-client.component";
import { ClassicBrandComponent } from "../classic/classic-brand/classic-brand.component";
import { ClassicLatestPropertyComponent } from "../classic/classic-latest-property/classic-latest-property.component";
import { MapVSearchHomeSectionComponent } from './map-v-search-home-section/map-v-search-home-section.component';

@Component({
    selector: 'app-map-v-search',
    templateUrl: './map-v-search.component.html',
    styleUrls: ['./map-v-search.component.scss'],
    imports: [ClassicFeaturedPropertyComponent, ClassicPropertyServiceComponent, MapVSearchHomeSectionComponent,
        ClassicPropertyListingComponent, ClassicVideoComponent, ClassicAgentsComponent,
        ClassicBannerComponent, ClassicHappyClientComponent, ClassicBrandComponent, ClassicLatestPropertyComponent]
})

export class MapVSearchComponent {
  public themeLogo = 'assets/images/logo/4.png';
  public darkThemeLogo = 'assets/images/logo/9.png'
  public title = 'classic';

  public latestPropertyData: latestForRent[] = [];

  public theme_default6 = '#f35d43';
  public theme_default7 = '#f34451';

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
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default6');
    document.documentElement.style.removeProperty('--theme-default7');
  }
}
