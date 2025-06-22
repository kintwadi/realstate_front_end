import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { agency, agencyAgent, pagination } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { AboutAgencyComponent } from "../widgets/about-agency/about-agency.component";
import { CommonAgencyComponent } from "../widgets/common-agency/common-agency.component";
import { GridPanelComponent } from "../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { CommonFilterPropertyBoxComponent } from "../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box.component";
import { AdvanceFilterComponent } from "../../../../shared/components/common/advance-filter/advance-filter.component";

@Component({
    selector: 'app-agency-profile',
    templateUrl: './agency-profile.component.html',
    styleUrls: ['./agency-profile.component.scss'],
    imports: [BreadcrumbComponent, AboutAgencyComponent, CommonAgencyComponent, GridPanelComponent, CommonFilterPropertyBoxComponent, AdvanceFilterComponent]
})
export class AgencyProfileComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Profile';
  public parent = 'Home';
  public child = 'Agency Profile';

  public aboutAgency: agency[];
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

    this.propertyService.agencyData().subscribe((response) => {
      this.aboutAgency = response.agencyData;
      this.agentsData = response.agentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  getData(tag: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: pagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value
  }
}
