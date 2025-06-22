import { Component, Input } from '@angular/core';
import { footerBlogData } from '../../../../shared/interface/footer';
import { ContactOneComponent } from '../widgets/contact-one/contact-one.component';
import { AboutComponent } from '../widgets/about/about.component';
import { MapComponent } from '../widgets/map/map.component';
import { TagComponent } from '../widgets/tag/tag.component';
import { LatestBlogVerticalComponent } from '../widgets/latest-blog-vertical/latest-blog-vertical.component';
import { SocialMediaComponent } from '../widgets/social-media/social-media.component';
import { CopyRightOneComponent } from '../widgets/copy-right-one/copy-right-one.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer-one',
    imports: [ContactOneComponent, AboutComponent, MapComponent, CommonModule,
        TagComponent, LatestBlogVerticalComponent, SocialMediaComponent, CopyRightOneComponent],
    templateUrl: './footer-one.component.html',
    styleUrls: ['./footer-one.component.scss']
})

export class FooterOneComponent {

  @Input() blogData: footerBlogData[] = [];
  @Input() footerLogo: string = 'assets/images/logo/6.png';
  @Input() footerClass?: string = '';
  @Input() heartIcon?: boolean = true;
  @Input() darkFooterLogo: string;
  @Input() subFooterClass?: string;
}
