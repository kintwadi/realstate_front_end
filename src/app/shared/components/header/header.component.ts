import { Component, Input } from '@angular/core';
import { layout } from '../../interface/layout';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderFourComponent } from './header-four/header-four.component';

@Component({
    selector: 'app-header',
    imports: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, HeaderFourComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() type: string;
  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() themeLogo: string;
  @Input() headerClass: string;
  @Input() headerFix: boolean;
  @Input() darkFooterLogo: string;
  @Input() darkThemeHeaderLogo: string;
  @Input() data: layout;

}
