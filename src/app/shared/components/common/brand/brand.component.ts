import { Component, Input } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { BrandOneComponent } from './brand-one/brand-one.component';
import { BrandTwoComponent } from './brand-two/brand-two.component';
import { BrandThreeComponent } from './brand-three/brand-three.component';

@Component({
    selector: 'app-brand',
    imports: [BrandOneComponent, BrandTwoComponent, BrandThreeComponent],
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  @Input() brandData: brand[];
  @Input() type: string = '';

}
