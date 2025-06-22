import { Component, Input } from '@angular/core';
import { agency } from '../../../../shared/interface/property';
import { FeatherIconsComponent } from '../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-agent-profile-details',
    imports: [FeatherIconsComponent],
    templateUrl: './agent-profile-details.component.html',
    styleUrls: ['./agent-profile-details.component.scss']
})
export class AgentProfileDetailsComponent {

  @Input() agentsDetails: agency;

}
