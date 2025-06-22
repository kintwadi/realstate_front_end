import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { EnterpriseBannerComponent } from './enterprise-banner/enterprise-banner.component';
import { EnterpriseBrandComponent } from './enterprise-brand/enterprise-brand.component';
import { EnterpriseFeaturedCityComponent } from './enterprise-featured-city/enterprise-featured-city.component';
import { EnterpriseHomeSectionComponent } from './enterprise-home-section/enterprise-home-section.component';
import { EnterpriseLatestBlogComponent } from './enterprise-latest-blog/enterprise-latest-blog.component';
import { EnterpriseLatestPropertyComponent } from './enterprise-latest-property/enterprise-latest-property.component';
import { EnterpriseLookingForComponent } from './enterprise-looking-for/enterprise-looking-for.component';
import { EnterprisePeopleSayComponent } from './enterprise-people-say/enterprise-people-say.component';
import { EnterprisePropertyOfDayComponent } from './enterprise-property-of-day/enterprise-property-of-day.component';
import { EnterprisePropertyServiceComponent } from './enterprise-property-service/enterprise-property-service.component';

@Component({
    selector: 'app-enterprise',
    imports: [EnterpriseHomeSectionComponent, EnterprisePropertyServiceComponent, EnterprisePropertyOfDayComponent,
        EnterpriseLatestPropertyComponent, EnterpriseLookingForComponent, EnterpriseFeaturedCityComponent,
        EnterpriseBannerComponent, EnterprisePeopleSayComponent, EnterpriseLatestBlogComponent, EnterpriseBrandComponent,],
    templateUrl: './enterprise.component.html',
    styleUrls: ['./enterprise.component.scss']
})

export class EnterpriseComponent {

  public themeLogo = 'assets/images/logo/footer-logo.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public headerLogo = 'assets/images/logo/2.png';
  public headerClass = 'header-2';
  public title = 'enterprise';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public latestForRentData: latestForRent[];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4',this.theme_default4);

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
