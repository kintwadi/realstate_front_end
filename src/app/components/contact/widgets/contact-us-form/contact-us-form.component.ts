import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-contact-us-form',
    imports: [CommonModule, FeatherIconsComponent],
    templateUrl: './contact-us-form.component.html',
    styleUrls: ['./contact-us-form.component.scss']
})

export class ContactUsFormComponent {

  @Input() captcha:boolean = false;
  @Input() rowClass: string;

}
