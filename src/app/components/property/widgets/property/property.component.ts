import { Component, Input } from '@angular/core';
import { propertyDetailsData } from '../../../../shared/interface/property';
import { PropertySliderComponent } from './property-slider/property-slider.component';
import { PropertyTabComponent } from './property-tab/property-tab.component';

@Component({
    selector: 'app-property',
    imports: [PropertySliderComponent, PropertyTabComponent],
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

  @Input() propertyData: propertyDetailsData;
  @Input() type: string;
  @Input() dataArray: string[];
  @Input() propertyDetailsData: propertyDetailsData;

}
