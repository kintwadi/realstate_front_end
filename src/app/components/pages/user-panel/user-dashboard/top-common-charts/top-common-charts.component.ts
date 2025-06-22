import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-top-common-charts',
    imports: [CommonModule, ChartistModule],
    templateUrl: './top-common-charts.component.html',
    styleUrls: ['./top-common-charts.component.scss']
})
export class TopCommonChartsComponent {

  @Input() chartData: any;
  
}
