import { Component } from '@angular/core';
import { CommonLeafletMapComponent } from "../../../../../shared/components/common/widgets/common-leaflet-map/common-leaflet-map.component";
import { CommonPropertyFilterListingComponent } from "../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing.component";

@Component({
    selector: 'app-map-header-leaflet-map',
    templateUrl: './map-header-leaflet-map.component.html',
    styleUrls: ['./map-header-leaflet-map.component.scss'],
    imports: [CommonLeafletMapComponent, CommonPropertyFilterListingComponent]
})
export class MapHeaderLeafletMapComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor() {}

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
}
