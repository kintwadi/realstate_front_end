import { Component } from '@angular/core';
import { totalAgents, totalProperty, totalSales } from '../../../../shared/data/dashboard-charts';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { UserInfoComponent } from "../widgets/user-info/user-info.component";
import { UserPanelSideMenuComponent } from "../widgets/user-panel-side-menu/user-panel-side-menu.component";
import { TopCommonChartsComponent } from './top-common-charts/top-common-charts.component';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { SalesByAgentsComponent } from './sales-by-agents/sales-by-agents.component';
import { AvailablePropertyComponent } from './available-property/available-property.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.scss'],
    imports: [BreadcrumbComponent, UserInfoComponent, UserPanelSideMenuComponent, TopCommonChartsComponent,
        SalesOverviewComponent, SalesByAgentsComponent, AvailablePropertyComponent, PropertyOverviewComponent
    ]
})
export class UserDashboardComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Dashboard';

  public totalAgents = totalAgents;
  public totalSales = totalSales;
  public totalProperty = totalProperty;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
