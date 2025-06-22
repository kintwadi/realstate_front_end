import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { agency, agencyAgent, pagination } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { GridPanelComponent } from "../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { CommonFilterPropertyBoxComponent } from "../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box.component";
import { AdvanceFilterComponent } from "../../../shared/components/common/advance-filter/advance-filter.component";
import { AgentProfileDetailsComponent } from '../widgets/agent-profile-details/agent-profile-details.component';

@Component({
    selector: 'app-agent-profile',
    templateUrl: './agent-profile.component.html',
    styleUrls: ['./agent-profile.component.scss'],
    imports: [BreadcrumbComponent, GridPanelComponent, CommonFilterPropertyBoxComponent,
        AdvanceFilterComponent, AgentProfileDetailsComponent]
})
export class AgentProfileComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Agent Profile';
  public parent = 'Home';
  public child = 'Agent Profile';

  public agentsDetails: agency[];
  public agentsData: agencyAgent[];

  public paginationData: pagination;

  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.agentsDetailsData().subscribe((response) => {
      this.agentsDetails = response.agentsProfileDetails;
    });

    this.propertyService.agencyData().subscribe((response) => {
      this.agentsData = response.agentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  public getData(tag: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  public receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  public getPaginationData(pagination: pagination) {
    this.paginationData = pagination;
  }

  public sortFilter(value: string) {
    this.filterValue = value
  }
}
