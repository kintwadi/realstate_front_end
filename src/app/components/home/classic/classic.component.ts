import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { ClassicAgentsComponent } from './classic-agents/classic-agents.component';
import { ClassicBannerComponent } from './classic-banner/classic-banner.component';
import { ClassicBrandComponent } from './classic-brand/classic-brand.component';
import { ClassicFeaturedPropertyComponent } from './classic-featured-property/classic-featured-property.component';
import { ClassicHappyClientComponent } from './classic-happy-client/classic-happy-client.component';
import { ClassicHomeSectionComponent } from './classic-home-section/classic-home-section.component';
import { ClassicLatestPropertyComponent } from './classic-latest-property/classic-latest-property.component';
import { ClassicPropertyListingComponent } from './classic-property-listing/classic-property-listing.component';
import { ClassicPropertyServiceComponent } from './classic-property-service/classic-property-service.component';
import { ClassicVideoComponent } from './classic-video/classic-video.component';

@Component({
    selector: 'app-classic',
    imports: [ClassicHomeSectionComponent, ClassicLatestPropertyComponent, ClassicFeaturedPropertyComponent,
        ClassicPropertyServiceComponent, ClassicBannerComponent, ClassicAgentsComponent,
        ClassicVideoComponent, ClassicHappyClientComponent, ClassicBrandComponent, ClassicPropertyListingComponent,],
    templateUrl: './classic.component.html',
    styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkThemeLogo = 'assets/images/logo/9.png';
  public title = 'classic';

  public latestPropertyData: latestForRent[] = [];

  public theme_default6 = '#f35d43';
  public theme_default7 = '#f34451';

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default6);
    document.documentElement.style.setProperty('--theme-default6', this.theme_default6);
    document.documentElement.style.setProperty('--theme-default7', this.theme_default7);

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
