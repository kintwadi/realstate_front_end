import { Component, Input } from '@angular/core';
import { agency } from '../../../../../shared/interface/property';
import { FeatherIconsComponent } from '../../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-about-agency',
    imports: [FeatherIconsComponent],
    templateUrl: './about-agency.component.html',
    styleUrls: ['./about-agency.component.scss']
})
export class AboutAgencyComponent {

  @Input() aboutAgency: agency;
  
}
