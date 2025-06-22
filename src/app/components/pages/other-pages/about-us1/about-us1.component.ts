import { Component } from '@angular/core';
import { whyChooseUsData } from '../../../../shared/data/about-us';
import { brand, happyClients, latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { TitleComponent } from "../../../../shared/components/ui/title/title.component";
import { AboutUs1DetailsComponent } from './widgets/about-us1-details/about-us1-details.component';
import { WhyChooseUsComponent } from './widgets/why-choose-us/why-choose-us.component';
import { HappyClientsComponent } from "../../../../shared/components/common/happy-clients/happy-clients.component";
import { LatestBlogComponent } from "../../../../shared/components/common/latest-blog/latest-blog.component";
import { BrandComponent } from "../../../../shared/components/common/brand/brand.component";

@Component({
    selector: 'app-about-us1',
    templateUrl: './about-us1.component.html',
    styleUrls: ['./about-us1.component.scss'],
    imports: [BreadcrumbComponent, TitleComponent, AboutUs1DetailsComponent,
        WhyChooseUsComponent, HappyClientsComponent, LatestBlogComponent, BrandComponent]
})
export class AboutUs1Component {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'About Us';
  public parent = 'Home';
  public child = 'About Us';

  public aboutDesc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public chooseUsDesc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public happyClientDesc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public blogDesc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';

  public whyChooseUsData = whyChooseUsData;

  public clientTitle = 'classic';
  public blogTitle = 'corporate';
  public brandTitle = 'enterprise';

  public happyClientsData: happyClients[] = [];
  public latestBlogData: latestBlog[] = [];
  public brandData: brand[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter((item) => item.type == this.clientTitle);
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == this.blogTitle);
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.brandTitle);
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
