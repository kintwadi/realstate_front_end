import { Component } from '@angular/core';
import { featuredProperty, propertyInCity } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { FeaturedPropertyComponent } from "../../../shared/components/common/featured-property/featured-property.component";
import { TitleComponent } from "../../../shared/components/ui/title/title.component";
import { PropertyInCitiesComponent } from "../../../shared/components/common/property-in-cities/property-in-cities.component";

@Component({
    selector: 'app-modules-feature',
    templateUrl: './modules-feature.component.html',
    styleUrls: ['./modules-feature.component.scss'],
    imports: [BreadcrumbComponent, FeaturedPropertyComponent, TitleComponent, PropertyInCitiesComponent]
})
export class ModulesFeatureComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Feature';
  public parent = 'Modules';
  public child = 'Feature';

  public desc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public desc2 = 'See why ProCity is one of the best friends for exploring the city.';

  public featureTitle1 = 'classic';
  public featureTitle2 = 'image_content';
  public featureTitle3 = 'corporate';
  public featureTitle4 = 'enterprise';

  public featuredProperty1: featuredProperty[] = [];
  public featuredProperty2: featuredProperty[] = [];
  public featuredProperty3: featuredProperty[] = [];
  public propertyInCity: propertyInCity[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty1 = response.featuredProperty.filter((item) => item.type == this.featureTitle1);
      this.featuredProperty2 = response.featuredProperty.filter((item) => item.type.includes(this.featureTitle2));
      this.featuredProperty3 = response.featuredProperty.filter((item) => item.type == this.featureTitle3);
    });

    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.featureTitle4)
      );
    });
  }
}
