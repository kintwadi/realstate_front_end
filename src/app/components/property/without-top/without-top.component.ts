import { Component } from '@angular/core';
import { propertyDetailsData } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { PropertyImagesComponent } from "../widgets/property-images/property-images.component";
import { PropertyComponent } from "../widgets/property/property.component";
import { RelatedPropertyComponent } from "../widgets/related-property/related-property.component";
import { AdvanceFilterComponent } from "../../../shared/components/common/advance-filter/advance-filter.component";
import { HomeDetailsComponent } from "../widgets/home-details/home-details.component";

@Component({
    selector: 'app-without-top',
    templateUrl: './without-top.component.html',
    styleUrls: ['./without-top.component.scss'],
    imports: [PropertyImagesComponent, PropertyComponent, RelatedPropertyComponent, AdvanceFilterComponent, HomeDetailsComponent]
})
export class WithoutTopComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'
  public footerLogo = 'assets/images/logo/footer-logo.png';
  
  public propertyDetailsData: propertyDetailsData;
  public propertyData: propertyDetailsData;

  public dataArray = ['about', 'feature','gallery','video','floor_plan','location'];
  
  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
          if (Array.isArray(response.data)) {
            this.propertyDetailsData = response.data.filter(
              (tabData: { value: string }) => this.dataArray?.includes(tabData.value)
            );
          }
      }
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
