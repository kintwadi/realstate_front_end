import { Component, Input } from '@angular/core';
import { banner } from '../../../../../shared/interface/property';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-banner-one',
    imports: [CommonModule, RouterModule],
    templateUrl: './banner-one.component.html',
    styleUrls: ['./banner-one.component.scss']
})
export class BannerOneComponent {

  @Input() bannerData: banner;
  @Input() tagClass: string = '';
  @Input() buttonClass: string;

}
