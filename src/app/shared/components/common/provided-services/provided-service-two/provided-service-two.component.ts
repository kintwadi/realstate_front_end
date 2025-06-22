import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../../shared/interface/property';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-provided-service-two',
    imports: [FeatherIconsComponent],
    templateUrl: './provided-service-two.component.html',
    styleUrls: ['./provided-service-two.component.scss']
})
export class ProvidedServiceTwoComponent {

  @Input() providedServices: providedServices;
  
}
