import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';
import { PropertyCityOneComponent } from './property-city-one/property-city-one.component';
import { PropertyCityTwoComponent } from './property-city-two/property-city-two.component';

@Component({
    selector: 'app-property-in-cities',
    imports: [PropertyCityOneComponent, PropertyCityTwoComponent],
    templateUrl: './property-in-cities.component.html',
    styleUrls: ['./property-in-cities.component.scss']
})
export class PropertyInCitiesComponent {

  @Input() propertyInCity: propertyInCity;
  @Input() propertyInCityData: propertyInCity[];
  @Input() type: string = '';
  @Input() tagClass: string = '';
}
