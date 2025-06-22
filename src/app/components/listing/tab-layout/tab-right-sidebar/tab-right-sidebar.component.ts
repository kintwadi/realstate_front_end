import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { CommonTabPropertyBoxComponent } from "../widgets/common-tab-property-box/common-tab-property-box.component";
import { CommonFilterListingComponent } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";

@Component({
    selector: 'app-tab-right-sidebar',
    templateUrl: './tab-right-sidebar.component.html',
    styleUrls: ['./tab-right-sidebar.component.scss'],
    imports: [BreadcrumbComponent, CommonTabPropertyBoxComponent, CommonFilterListingComponent]
})
export class TabRightSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Right Sidebar';
  public parent = 'Listing';
  public child = 'Right Sidebar';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor() {}
  
  ngOnInit() {
    document.documentElement.style.setProperty( '--theme-default', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
