import { Component, Input } from '@angular/core';
import { blogData } from '../../../shared/data/footer';
import { CorporateAgentsComponent } from './corporate-agents/corporate-agents.component';
import { CorporateBannerComponent } from './corporate-banner/corporate-banner.component';
import { CorporateClientsComponent } from './corporate-clients/corporate-clients.component';
import { CorporateFeaturedPropertyComponent } from './corporate-featured-property/corporate-featured-property.component';
import { CorporateHomeSliderComponent } from './corporate-home-slider/corporate-home-slider.component';
import { CorporateLatestBlogComponent } from './corporate-latest-blog/corporate-latest-blog.component';
import { CorporatePricingPlanComponent } from './corporate-pricing-plan/corporate-pricing-plan.component';
import { CorporatePropertyListingComponent } from './corporate-property-listing/corporate-property-listing.component';
import { CorporateProvidedServicesComponent } from './corporate-provided-services/corporate-provided-services.component';

@Component({
    selector: 'app-corporate',
    imports: [CorporateHomeSliderComponent, CorporatePropertyListingComponent, CorporateProvidedServicesComponent,
        CorporatePricingPlanComponent, CorporateFeaturedPropertyComponent, CorporateBannerComponent,
        CorporateAgentsComponent, CorporateClientsComponent, CorporateLatestBlogComponent,],
    templateUrl: './corporate.component.html',
    styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent {

  @Input() darkFooterLogo: string = 'assets/images/logo/3.png';

  public headerLogo = 'assets/images/logo/5.png';
  public darkHeaderLogo = 'assets/images/logo/11.png'
  public footerLogo = 'assets/images/logo/3.png';
  public footerClass = 'footer-dark';
  public subFooterClass = 'sub-footer-dark';
  public heartIcon = false;
  public blogData = blogData;

  public theme_default5 = '#5eac12';
  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-default',this.theme_default5);
    document.documentElement.style.setProperty('--theme-default5',this.theme_default5);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default5');
  }
}
