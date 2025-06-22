import { Component, Input } from '@angular/core';
import { whyChooseUs } from '../../../../../../shared/data/about-us';
import { FeatherIconsComponent } from '../../../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-why-choose-us',
    imports: [FeatherIconsComponent],
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {

  @Input() whyChooseUsData: whyChooseUs;

}
