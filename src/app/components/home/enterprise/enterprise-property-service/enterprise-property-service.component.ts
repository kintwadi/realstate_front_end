import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { ProvidedServicesComponent } from '../../../../shared/components/common/provided-services/provided-services.component';

@Component({
    selector: 'app-enterprise-property-service',
    imports: [TitleComponent, ProvidedServicesComponent],
    templateUrl: './enterprise-property-service.component.html',
    styleUrls: ['./enterprise-property-service.component.scss']
})

export class EnterprisePropertyServiceComponent {
  @Input() title: string;

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public providedServices: providedServices[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
