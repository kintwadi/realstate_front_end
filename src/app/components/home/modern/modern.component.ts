import { Component } from '@angular/core';
import { latestForRent } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { EnterpriseLatestPropertyComponent } from "../enterprise/enterprise-latest-property/enterprise-latest-property.component";
import { EnterpriseLookingForComponent } from "../enterprise/enterprise-looking-for/enterprise-looking-for.component";
import { EnterprisePropertyOfDayComponent } from "../enterprise/enterprise-property-of-day/enterprise-property-of-day.component";
import { EnterpriseFeaturedCityComponent } from "../enterprise/enterprise-featured-city/enterprise-featured-city.component";
import { EnterpriseBannerComponent } from "../enterprise/enterprise-banner/enterprise-banner.component";
import { EnterprisePeopleSayComponent } from "../enterprise/enterprise-people-say/enterprise-people-say.component";
import { EnterpriseLatestBlogComponent } from "../enterprise/enterprise-latest-blog/enterprise-latest-blog.component";
import { EnterpriseBrandComponent } from "../enterprise/enterprise-brand/enterprise-brand.component";
import { EnterprisePropertyServiceComponent } from "../enterprise/enterprise-property-service/enterprise-property-service.component";
import { ModernHomeSectionComponent } from './modern-home-section/modern-home-section.component';

@Component({
    selector: 'app-modern',
    templateUrl: './modern.component.html',
    styleUrls: ['./modern.component.scss'],
    imports: [EnterpriseLatestPropertyComponent, EnterpriseLookingForComponent, EnterprisePropertyOfDayComponent,
        EnterpriseFeaturedCityComponent, EnterpriseBannerComponent, EnterprisePeopleSayComponent,
        EnterpriseLatestBlogComponent, EnterpriseBrandComponent, EnterprisePropertyServiceComponent, ModernHomeSectionComponent]
})
export class ModernComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = "assets/images/logo/footer-logo.png"
  public headerClass = 'header-2';
  public title = 'modern';

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


