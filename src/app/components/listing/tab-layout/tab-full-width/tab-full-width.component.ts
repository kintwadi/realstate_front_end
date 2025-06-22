import { Component, Input } from '@angular/core';
import { PropertyBoxGridService } from '../../../../shared/services/property-box-grid.service';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { CommonFilterListingComponent } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";
import { CommonTabPropertyBoxComponent } from '../widgets/common-tab-property-box/common-tab-property-box.component';

@Component({
    selector: 'app-tab-full-width',
    templateUrl: './tab-full-width.component.html',
    styleUrls: ['./tab-full-width.component.scss'],
    imports: [BreadcrumbComponent, CommonFilterListingComponent, CommonTabPropertyBoxComponent]
})
export class TabFullWidthComponent {

  @Input() newItemEvent: string;

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Tab Full Width';
  public parent = 'Listing';
  public child = 'Tab Full Width';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}

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

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }
}
