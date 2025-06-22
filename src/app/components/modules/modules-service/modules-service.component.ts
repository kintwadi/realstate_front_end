import { Component } from '@angular/core';
import { providedServices } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { TitleComponent } from "../../../shared/components/ui/title/title.component";
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { ProvidedServicesComponent } from "../../../shared/components/common/provided-services/provided-services.component";

@Component({
    selector: 'app-modules-service',
    templateUrl: './modules-service.component.html',
    styleUrls: ['./modules-service.component.scss'],
    imports: [TitleComponent, BreadcrumbComponent, ProvidedServicesComponent]
})
export class ModulesServiceComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Services';
  public parent = 'Modules';
  public child = 'Services';

  public desc1 = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';
  public desc2 = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public desc3 = 'Residences can be classified into different type of housing tenure can used for same physical type.';

  public serviceTitle1 = 'enterprise';
  public serviceTitle2 = 'corporate';
  public serviceTitle3 = 'classic';

  public providedServices1: providedServices[] = [];
  public providedServices2: providedServices[] = [];
  public providedServices3: providedServices[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices1 = response.services.filter((item) => item.type.includes(this.serviceTitle1));
      this.providedServices2 = response.services.filter((item) => item.type == this.serviceTitle2);
      this.providedServices3 = response.services.filter((item) => item.type == this.serviceTitle3);
    });
  }
}
