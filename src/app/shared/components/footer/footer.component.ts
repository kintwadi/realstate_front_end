import { Component, Input } from '@angular/core';
import { layout } from '../../interface/layout';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';

@Component({
    selector: 'app-footer',
    imports: [FooterOneComponent, FooterTwoComponent, FooterThreeComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() data: layout;
  @Input() type: string;
  @Input() themeLogo: string;
  @Input() footerClass: string;
  @Input() heartIcon: boolean;
  @Input() footerDark: boolean;
  @Input() footerLogo: string;
  @Input() darkFooterLogo: string;
  @Input() subFooterClass: string;

}
