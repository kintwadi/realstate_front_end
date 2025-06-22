import { Component, Input } from '@angular/core';
import { banner } from '../../../../../shared/interface/property';

@Component({
    selector: 'app-banner-three',
    imports: [],
    templateUrl: './banner-three.component.html',
    styleUrls: ['./banner-three.component.scss']
})

export class BannerThreeComponent {

  @Input() bannerData: banner;

}
