import { Component } from '@angular/core';
import { latestBlog, peopleSay, providedServices } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { TitleComponent } from "../../../../shared/components/ui/title/title.component";
import { ProvidedServicesComponent } from "../../../../shared/components/common/provided-services/provided-services.component";
import { PeopleSayComponent } from "../../../../shared/components/common/people-say/people-say.component";
import { LatestBlogComponent } from "../../../../shared/components/common/latest-blog/latest-blog.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    imports: [BreadcrumbComponent, TitleComponent, ProvidedServicesComponent,
        PeopleSayComponent, LatestBlogComponent, RouterModule]
})
export class ServicesComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Services';
  public parent = 'Home';
  public child = 'Services';

  public serviceDesc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public blogDesc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public peopleSayDesc = 'Cum doctus civibus efficiantur in imperdiet deterruisset.';

  public serviceTitle = 'enterprise';
  public blogTitle = 'corporate';
  public peopleSayTitle = 'enterprise';

  public providedServices: providedServices[] = [];
  public latestBlogData: latestBlog[] = [];
  public peopleSayData: peopleSay[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter((item) => item.type.includes(this.serviceTitle));
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == this.blogTitle);
    });

    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter((item) => item.type == this.peopleSayTitle);
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
