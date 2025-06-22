import { Component } from '@angular/core';
import { banner, brand, pricingPlan, propertyOfDay } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from '../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { TitleComponent } from "../../../../shared/components/ui/title/title.component";
import { PricingPlanComponent } from "../../../../shared/components/common/pricing-plan/pricing-plan.component";
import { NewOfferComponent } from "../../../../shared/components/common/new-offer/new-offer.component";
import { PropertyOfDayComponent } from "../../../../shared/components/common/property-of-day/property-of-day.component";
import { BannerComponent } from "../../../../shared/components/common/banner/banner.component";
import { BrandComponent } from "../../../../shared/components/common/brand/brand.component";

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    imports: [BreadcrumbComponent, TitleComponent, PricingPlanComponent, NewOfferComponent, PropertyOfDayComponent, BannerComponent, BrandComponent]
})

export class PricingComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Pricing';
  public parent = 'Home';
  public child = 'Pricing';
  public tagClass = 'color-2';

  public pricingDesc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public offerDesc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public propertyOfDayDesc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public pricingTitle = 'corporate';
  public offerTitle = 'slider_filter_search';
  public propertyOfDayTitle = 'enterprise';
  public bannerTitle = 'enterprise';
  public bannerClassicTitle = 'classic';
  public brandTitle = 'classic';

  public pricingPlan: pricingPlan[] = [];
  public propertyOfDay: propertyOfDay[] = [];
  public bannerData: banner[] = [];
  public bannerDataClassic: banner[] = [];
  public brandData: brand[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
    document.documentElement.style.setProperty('--theme-default2', '#ff8c41');

    this.propertyService.pricingPlanData().subscribe((response) => {
      this.pricingPlan = response.pricingPlan.filter((item) => item.type == this.pricingTitle);
    });

    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) => item.type.includes(this.propertyOfDayTitle));
    });

    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter((item) => item.type == this.bannerTitle);
      this.bannerDataClassic = response.banner.filter((item) => item.type == this.bannerClassicTitle);
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.brandTitle);
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
