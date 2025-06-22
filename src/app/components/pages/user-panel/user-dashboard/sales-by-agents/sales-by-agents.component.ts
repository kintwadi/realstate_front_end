import { Component } from '@angular/core';
import { salesByAgent } from '../../../../../shared/data/dashboard-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-sales-by-agents',
    imports: [NgApexchartsModule],
    templateUrl: './sales-by-agents.component.html',
    styleUrls: ['./sales-by-agents.component.scss']
})

export class SalesByAgentsComponent {

  public salesByAgents = salesByAgent;

}
