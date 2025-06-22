import { Component, Input } from '@angular/core';
import { propertyDetails } from '../../../../shared/interface/property';

@Component({
    selector: 'app-propety-details',
    imports: [],
    templateUrl: './propety-details.component.html',
    styleUrls: ['./propety-details.component.scss']
})
export class PropetyDetailsComponent {

  @Input() propertyDetailsData: propertyDetails[];

}
