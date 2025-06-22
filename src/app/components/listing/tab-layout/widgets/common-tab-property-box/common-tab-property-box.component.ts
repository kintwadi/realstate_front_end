import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { GridPanelComponent } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { AdvanceFilterBoxHorizontialComponent } from "../../../../../shared/components/common/advance-filter-box-horizontial/advance-filter-box-horizontial.component";
import { PropertyBoxComponent } from "../../../../../shared/components/common/property-box/property-box.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-tab-property-box',
    templateUrl: './common-tab-property-box.component.html',
    styleUrls: ['./common-tab-property-box.component.scss'],
    imports: [GridPanelComponent, AdvanceFilterBoxHorizontialComponent, PropertyBoxComponent, CommonModule]
})
export class CommonTabPropertyBoxComponent {

  @Input() advanceFilter: boolean;
  @Input() colClass: boolean = false;

  public tabValue: string;

  public propertyData: latestForRent[];
  public latestForRentData: latestForRent[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter(
        (item) => (item.labels)
      );
    });

    this.propertyService.latestForRentData().subscribe((response) => {
      this.propertyData = response.latestForRent.filter(
        (item) => item.labels
      );
    });
  }

  receiveChildData(value: string) {
    if(value == ''){
      this.propertyData = this.latestForRentData?.filter((data) => {
        return data.labels;
      });
    }else{
      this.propertyData = this.latestForRentData?.filter((data) => {
       return data.labels.includes(value)
     })
    }
  }

}
