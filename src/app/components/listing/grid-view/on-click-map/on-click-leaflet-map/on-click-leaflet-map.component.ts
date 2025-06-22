import { Component } from '@angular/core';
import { pagination } from '../../../../../shared/interface/property';
import { FilterBoxService } from '../../../../../shared/services/filter-box.service';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { BreadcrumbComponent } from "../../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { CommonFilterListingComponent } from "../../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";
import { GridPanelComponent } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { CommonLeafletMapComponent } from "../../../../../shared/components/common/widgets/common-leaflet-map/common-leaflet-map.component";
import { CommonFilterPropertyBoxComponent } from "../../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-on-click-leaflet-map',
    templateUrl: './on-click-leaflet-map.component.html',
    styleUrls: ['./on-click-leaflet-map.component.scss'],
    imports: [BreadcrumbComponent, CommonFilterListingComponent, GridPanelComponent,
        CommonLeafletMapComponent, CommonFilterPropertyBoxComponent, CommonModule]
})
export class OnClickLeafletMapComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Leaflet Map';
  public parent = 'Listing';
  public child = 'Leaflet Map';

  public listView: boolean = false;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService,public filterBoxService: FilterBoxService) {}

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
