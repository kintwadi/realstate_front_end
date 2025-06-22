import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactOneComponent } from '../widgets/contact-one/contact-one.component';
import { AboutComponent } from '../widgets/about/about.component';
import { BuyComponent } from '../widgets/buy/buy.component';
import { SellComponent } from '../widgets/sell/sell.component';
import { RelandEstateComponent } from '../widgets/reland-estate/reland-estate.component';
import { SocialMediaComponent } from '../widgets/social-media/social-media.component';
import { CopyRightOneComponent } from '../widgets/copy-right-one/copy-right-one.component';

@Component({
    selector: 'app-footer-three',
    imports: [CommonModule, ContactOneComponent, AboutComponent,
        BuyComponent, SellComponent, RelandEstateComponent,
        SocialMediaComponent, CopyRightOneComponent],
    templateUrl: './footer-three.component.html',
    styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent {

  @Input() footerDark?: boolean = false;
  @Input() footerLogo: string;
  @Input() darkFooterLogo: string;

}
