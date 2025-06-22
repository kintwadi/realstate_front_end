import { Component } from '@angular/core';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { BreadcrumbComponent } from '../../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { CommonPropertyFilterListingComponent } from '../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing.component';

@Component({
    selector: 'app-grid3-right-sidebar',
    imports: [BreadcrumbComponent, CommonPropertyFilterListingComponent],
    templateUrl: './grid3-right-sidebar.component.html',
    styleUrls: ['./grid3-right-sidebar.component.scss']
})
export class Grid3RightSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Right Sidebar';
  public parent = 'Listing';
  public child = 'Right Sidebar';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

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
}
