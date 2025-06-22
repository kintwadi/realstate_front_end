import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../../shared/interface/property';

@Component({
    selector: 'app-property-city-one',
    imports: [],
    templateUrl: './property-city-one.component.html',
    styleUrls: ['./property-city-one.component.scss']
})
export class PropertyCityOneComponent {

  @Input() propertyInCity: propertyInCity;
  @Input() tagClass: string = '';

}
