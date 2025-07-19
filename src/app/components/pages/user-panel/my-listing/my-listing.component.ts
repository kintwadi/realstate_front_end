import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import {UserInfoComponent} from "../widgets/user-info/user-info.component";
import {UserPanelSideMenuComponent} from "../widgets/user-panel-side-menu/user-panel-side-menu.component";
import {GridPanelComponent} from "../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import {
    CommonFilterListingComponent
} from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";
import {
    CommonFilterPropertyBoxComponent
} from "../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box.component";
import {
    CorporatePropertyListingComponent
} from "../../../home/corporate/corporate-property-listing/corporate-property-listing.component";
import {PropertyBoxComponent} from "../../../../shared/components/common/property-box/property-box.component";
import {latestForRent} from "../../../../shared/interface/property";
import {PropertyService} from "../../../../shared/services/property.service";

@Component({
    selector: 'app-my-listing',
    templateUrl: './my-listing.component.html',
    styleUrls: ['./my-listing.component.scss'],
    imports: [BreadcrumbComponent, UserInfoComponent, UserPanelSideMenuComponent,
        GridPanelComponent, CommonFilterListingComponent, CommonFilterPropertyBoxComponent, CorporatePropertyListingComponent, PropertyBoxComponent]
})
export class MyListingComponent implements OnInit {

    @Input() data: number = 0;

    public themeLogo = 'assets/images/logo/2.png';
    public footerLogo = 'assets/images/logo/footer-logo.png';
    public bgImage = 'assets/images/inner-background.jpg';
    public title = 'Dashboard';
    public parent = 'Home';
    public child = 'My Listing';


    public theme_default3 = '#ff5c41';
    public theme_default4 = '#ff8c41';
    public propertyListingData: latestForRent[] = [];

    constructor(public propertyService: PropertyService) {
    }

    ngOnInit() {
        document.documentElement.style.setProperty('--theme-default', this.theme_default3);
        document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
        document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
        this.propertyService.latestForRentData().subscribe((response) => {
            this.propertyListingData = response.latestForRent.filter(
                (item) => item.type == this.title
            );
        });
    }

    ngOnDestroy(): void {
        document.documentElement.style.removeProperty('--theme-default');
        document.documentElement.style.removeProperty('--theme-default3');
        document.documentElement.style.removeProperty('--theme-default4');
    }
}
