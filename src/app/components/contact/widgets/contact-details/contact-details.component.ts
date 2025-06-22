import { Component, Input } from '@angular/core';
import { details } from '../../../../shared/data/contact-us';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-contact-details',
    imports: [CommonModule, FeatherIconsComponent],
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  @Input() contactDetailsData: details;
  @Input() divClass: string;

}
