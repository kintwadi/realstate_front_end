import { Component, Input } from '@angular/core';
import { img } from '../../../../shared/interface/property';

@Component({
    selector: 'app-propety-floor-plan',
    imports: [],
    templateUrl: './propety-floor-plan.component.html',
    styleUrls: ['./propety-floor-plan.component.scss']
})
export class PropetyFloorPlanComponent {

  @Input() floorPlanData: img;

}
