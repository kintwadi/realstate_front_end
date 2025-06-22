import { Component } from '@angular/core';
import { tabData } from '../../../shared/data/sticky-tab';
import { homeSectionSlider, latestForRent, propertyDetailsData } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { AdvanceFilterComponent } from "../../../shared/components/common/advance-filter/advance-filter.component";
import { PropertyComponent } from "../widgets/property/property.component";
import { RelatedPropertyComponent } from "../widgets/related-property/related-property.component";
import { HomeSectionSliderComponent } from "../../../shared/components/common/home-section-slider/home-section-slider.component";
import { HomeDetailsComponent } from "../widgets/home-details/home-details.component";

@Component({
    selector: 'app-property-left-sidebar',
    templateUrl: './property-left-sidebar.component.html',
    styleUrls: ['./property-left-sidebar.component.scss'],
    imports: [AdvanceFilterComponent, PropertyComponent, RelatedPropertyComponent, HomeSectionSliderComponent, HomeDetailsComponent]
})
export class PropertyLeftSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public title = 'sticky_tab';
  public activeClass = 'about';

  public navFixed: boolean = false;
  public total = 3;
  public homeSectionSliderData: homeSectionSlider[];
  public latestForRentData: latestForRent[] = [];
  public propertyData: propertyDetailsData;

  public tabData = tabData;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title
      );
    });

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes('slider_filter_search')
      );
    });
  }



  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
