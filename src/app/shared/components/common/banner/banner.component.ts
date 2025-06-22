import { Component, Input } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { BannerOneComponent } from './banner-one/banner-one.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { BannerThreeComponent } from './banner-three/banner-three.component';
import { BannerFourComponent } from './banner-four/banner-four.component';

@Component({
    selector: 'app-banner',
    imports: [BannerOneComponent, BannerTwoComponent, BannerThreeComponent, BannerFourComponent],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() bannerData: banner;
  @Input() type: string = '';
  @Input() tagClass: string = '';
  @Input() buttonClass: string;

}
