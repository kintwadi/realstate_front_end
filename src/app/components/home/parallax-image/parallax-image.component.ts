import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';
import { CorporateProvidedServicesComponent } from "../corporate/corporate-provided-services/corporate-provided-services.component";
import { CorporatePropertyListingComponent } from "../corporate/corporate-property-listing/corporate-property-listing.component";
import { CorporatePricingPlanComponent } from "../corporate/corporate-pricing-plan/corporate-pricing-plan.component";
import { CorporateBannerComponent } from "../corporate/corporate-banner/corporate-banner.component";
import { CorporateAgentsComponent } from "../corporate/corporate-agents/corporate-agents.component";
import { CorporateClientsComponent } from "../corporate/corporate-clients/corporate-clients.component";
import { CorporateLatestBlogComponent } from "../corporate/corporate-latest-blog/corporate-latest-blog.component";
import { CorporateFeaturedPropertyComponent } from "../corporate/corporate-featured-property/corporate-featured-property.component";
import { ParallaxImageHomeSectionComponent } from './parallax-image-home-section/parallax-image-home-section.component';

@Component({
    selector: 'app-parallax-image',
    templateUrl: './parallax-image.component.html',
    styleUrls: ['./parallax-image.component.scss'],
    imports: [CorporateProvidedServicesComponent, CorporatePropertyListingComponent,
        CorporatePricingPlanComponent, CorporateBannerComponent, CorporateAgentsComponent,
        CorporateClientsComponent, CorporateLatestBlogComponent, CorporateFeaturedPropertyComponent,
        ParallaxImageHomeSectionComponent]
})
export class ParallaxImageComponent {

  public headerLogo = 'assets/images/logo/7.png';
  public darkHeaderLogo = 'assets/images/logo/8.png';
  public footerLogo = 'assets/images/logo/8.png';
  public footerClass = 'footer-dark';
  public heartIcon = false;
  public blogData = blogData;

  public theme_default10 = '#00968a';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default10);
    document.documentElement.style.setProperty('--theme-default10',this.theme_default10);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default10');
  }
}


