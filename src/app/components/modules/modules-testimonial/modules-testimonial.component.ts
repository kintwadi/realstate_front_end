import { Component } from '@angular/core';
import { happyClients, peopleSay } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { TitleComponent } from "../../../shared/components/ui/title/title.component";
import { PeopleSayComponent } from "../../../shared/components/common/people-say/people-say.component";
import { HappyClientsComponent } from "../../../shared/components/common/happy-clients/happy-clients.component";

@Component({
    selector: 'app-modules-testimonial',
    templateUrl: './modules-testimonial.component.html',
    styleUrls: ['./modules-testimonial.component.scss'],
    imports: [BreadcrumbComponent, TitleComponent, PeopleSayComponent, HappyClientsComponent]
})
export class ModulesTestimonialComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Testimonial';
  public parent = 'Modules';
  public child = 'Testimonial';

  public desc = 'Cum doctus civibus efficiantur in imperdiet deterruisset.';
  public desc2 = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public desc3 = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';

  public testimonialTitle1: string = 'enterprise';
  public testimonialTitle2: string = 'image_content';
  public testimonialTitle3 = 'corporate';
  public testimonialTitle4 = 'classic';

  public testimonialData1: peopleSay[];
  public testimonialData2: happyClients[] = [];
  public testimonialData3: happyClients[] = [];
  public testimonialData4: happyClients[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}
  ngOnInit() {
    this.propertyService.peopleSayData().subscribe((response) => {
      this.testimonialData1 = response.peopleSay.filter((item) => item.type == this.testimonialTitle1);
    });

    this.propertyService.happyClientsData().subscribe((response) => {
      this.testimonialData2 = response.clients.filter((item) => item.type.includes(this.testimonialTitle2));
      this.testimonialData3 = response.clients.filter((item) => item.type == this.testimonialTitle3);
      this.testimonialData4 = response.clients.filter((item) => item.type == this.testimonialTitle4);
    });
  }
}
