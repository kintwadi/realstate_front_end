import { Component } from '@angular/core';
import { pagination } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { BreadcrumbComponent } from "../../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { GridPanelComponent } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { CommonFilterListingComponent } from "../../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";
import { CommonFilterPropertyBoxComponent } from "../../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box.component";
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
    selector: 'app-left-side-google-map',
    templateUrl: './left-side-google-map.component.html',
    styleUrls: ['./left-side-google-map.component.scss'],
    imports: [BreadcrumbComponent, GridPanelComponent, CommonFilterListingComponent,
        CommonFilterPropertyBoxComponent, GoogleMapsModule]
})
export class LeftSideGoogleMapComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Google Map';
  public parent = 'Listing';
  public child = 'Google Map';

  public listView: boolean = false;
  public categoryValue: string;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6
  };

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4',this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
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
