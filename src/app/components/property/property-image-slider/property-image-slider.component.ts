import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, propertyDetailsData } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { getPropertyDetails } from '../../../shared/store/actions/property-detail.action';
import { propertyState } from '../../../shared/store/states/property-detail.state';
import { HomeDetailsComponent } from "../widgets/home-details/home-details.component";
import { PropertyComponent } from "../widgets/property/property.component";
import { RelatedPropertyComponent } from "../widgets/related-property/related-property.component";
import { AdvanceFilterComponent } from "../../../shared/components/common/advance-filter/advance-filter.component";
import { PropertyImageSliderHomeSectionComponent } from './property-image-slider-home-section/property-image-slider-home-section.component';

@Component({
    selector: 'app-property-image-slider',
    templateUrl: './property-image-slider.component.html',
    styleUrls: ['./property-image-slider.component.scss'],
    imports: [HomeDetailsComponent, PropertyComponent, RelatedPropertyComponent, AdvanceFilterComponent,
        PropertyImageSliderHomeSectionComponent
    ]
})
export class PropertyImageSliderComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public propertyDetailsData: propertyDetailsData;
  public propertyData: propertyDetailsData;
  public propertyId: number;
  public propertyDetails: latestForRent;

  public dataArray = ['about','feature','gallery','video','floor_plan','location'];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  @Select(propertyState.property) property$: Observable<latestForRent[]>;

  constructor(
    private propertyService: PropertyService,
    private store: Store,
    private route: ActivatedRoute)
    {
      this.route.queryParams.subscribe((params) => {
        this.propertyId = params['id'];

      })

     this.store.dispatch(new getPropertyDetails(this.propertyId));

      this.property$.subscribe((res) => {
        this.propertyDetails = res[0]
      })
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
        if (Array.isArray(response.data)) {
          this.propertyDetailsData = response.data.filter(
            (tabData: { value: string }) =>
              this.dataArray?.includes(tabData.value)
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
