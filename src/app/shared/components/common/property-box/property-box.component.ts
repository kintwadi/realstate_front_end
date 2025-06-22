import { Component, Input } from '@angular/core';
import { latestForRent, latestForSale } from '../../../../shared/interface/property';
import { PropertyBoxOneComponent } from './property-box-one/property-box-one.component';
import { PropertyBoxTwoComponent } from './property-box-two/property-box-two.component';
import { PropertyBoxThreeComponent } from './property-box-three/property-box-three.component';
import { PropertyBoxFourComponent } from './property-box-four/property-box-four.component';

@Component({
    selector: 'app-property-box',
    imports: [PropertyBoxOneComponent, PropertyBoxTwoComponent, PropertyBoxThreeComponent, PropertyBoxFourComponent],
    templateUrl: './property-box.component.html',
    styleUrls: ['./property-box.component.scss']
})

export class PropertyBoxComponent {

  @Input() title: string = '';
  @Input() propertyData: latestForSale;
  @Input() latestForRentData: latestForRent;
  @Input() propertyListingData: latestForRent;
  @Input() latestPropertyData: latestForRent[];
  @Input() propertyListingDataClassic: latestForRent;
  @Input() type: string = '';
  @Input() textColor: boolean = false;
  @Input() tagClass: string = '';
  @Input() carousel: boolean = false;
  @Input() data: number;
  @Input() listView: boolean = false;
  @Input() thumbnail: boolean = false;
  @Input() thumbnail_video: boolean = false;
  @Input() gridImages: boolean = false;

}
