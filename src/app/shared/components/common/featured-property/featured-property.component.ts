import { Component, Input } from '@angular/core';
import { currency, featuredProperty } from '../../../../shared/interface/property';
import { FeaturedPropertyOneComponent } from './featured-property-one/featured-property-one.component';
import { FeaturedPropertyTwoComponent } from './featured-property-two/featured-property-two.component';
import { FeaturedPropertyThreeComponent } from './featured-property-three/featured-property-three.component';

@Component({
    selector: 'app-featured-property',
    imports: [FeaturedPropertyOneComponent, FeaturedPropertyTwoComponent, FeaturedPropertyThreeComponent],
    templateUrl: './featured-property.component.html',
    styleUrls: ['./featured-property.component.scss']
})

export class FeaturedPropertyComponent {

  @Input() featuredProperty: featuredProperty[];
  @Input() type: string = '';
  @Input() tagClass: string = '';

}
