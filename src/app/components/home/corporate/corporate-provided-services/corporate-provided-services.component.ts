import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { ProvidedServicesComponent } from '../../../../shared/components/common/provided-services/provided-services.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-corporate-provided-services',
    imports: [TitleComponent, ProvidedServicesComponent, CommonModule],
    templateUrl: './corporate-provided-services.component.html',
    styleUrls: ['./corporate-provided-services.component.scss']
})
export class CorporateProvidedServicesComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public providedServices : providedServices[] = []

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.providesServices().subscribe(response => {
      this.providedServices = response.services.filter(item => item.type == this.title)
  });
  }
}
