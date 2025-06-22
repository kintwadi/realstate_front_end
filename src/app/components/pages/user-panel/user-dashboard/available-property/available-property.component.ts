import { Component } from '@angular/core';
import { availablePropertyData } from '../../../../../shared/data/dashboard-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-available-property',
    imports: [NgApexchartsModule],
    templateUrl: './available-property.component.html',
    styleUrls: ['./available-property.component.scss']
})
export class AvailablePropertyComponent {

  public availablePropertyData = availablePropertyData;

}
