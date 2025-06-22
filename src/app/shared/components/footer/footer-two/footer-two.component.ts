import { Component, Input } from '@angular/core';
import { ContactTwoComponent } from '../widgets/contact-two/contact-two.component';
import { UsefulLinksComponent } from '../widgets/useful-links/useful-links.component';
import { FeaturesComponent } from '../widgets/features/features.component';
import { SocialComponent } from '../widgets/social/social.component';
import { SubscribeComponent } from '../widgets/subscribe/subscribe.component';
import { LatestBlogHorizontalComponent } from '../widgets/latest-blog-horizontal/latest-blog-horizontal.component';
import { CopyRightTwoComponent } from '../widgets/copy-right-two/copy-right-two.component';
import { FooterMenuComponent } from '../widgets/footer-menu/footer-menu.component';

@Component({
    selector: 'app-footer-two',
    imports: [ContactTwoComponent, UsefulLinksComponent, FeaturesComponent,
        SocialComponent, SubscribeComponent, LatestBlogHorizontalComponent,
        CopyRightTwoComponent, FooterMenuComponent],
    templateUrl: './footer-two.component.html',
    styleUrls: ['./footer-two.component.scss']
})
export class FooterTwoComponent {

  @Input() footerLogo: string;

}
