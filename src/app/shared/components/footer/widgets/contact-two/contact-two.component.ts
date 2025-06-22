import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-contact-two',
    imports: [RouterModule],
    templateUrl: './contact-two.component.html',
    styleUrls: ['./contact-two.component.scss']
})
export class ContactTwoComponent {

  @Input() footerLogo: string;

}
