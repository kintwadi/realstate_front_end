import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { ProvidedServiceOneComponent } from './provided-service-one/provided-service-one.component';
import { ProvidedServiceTwoComponent } from './provided-service-two/provided-service-two.component';
import { ProvidedServiceThreeComponent } from './provided-service-three/provided-service-three.component';

@Component({
    selector: 'app-provided-services',
    imports: [ProvidedServiceOneComponent, ProvidedServiceTwoComponent, ProvidedServiceThreeComponent],
    templateUrl: './provided-services.component.html',
    styleUrls: ['./provided-services.component.scss']
})
export class ProvidedServicesComponent {

  @Input() providedServices: providedServices;
  @Input() providedServicesData: providedServices[];
  @Input() type: string = '';
  @Input() tagClass: string;

}
