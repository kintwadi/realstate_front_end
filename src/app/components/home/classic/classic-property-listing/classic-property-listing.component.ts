import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { CommonModule } from '@angular/common';
import { PropertyBoxComponent } from '../../../../shared/components/common/property-box/property-box.component';

@Component({
    selector: 'app-classic-property-listing',
    imports: [CommonModule, PropertyBoxComponent],
    templateUrl: './classic-property-listing.component.html',
    styleUrls: ['./classic-property-listing.component.scss']
})

export class ClassicPropertyListingComponent {

  @Input() latestPropertyData: latestForRent[];

  public lookingForData: latestForRent[];
  public title = 'classic';
  public active = 1;
  public openTab: number = 1;

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.lookingForData = response.latestForRent.filter(
        (item) => item.type.includes(this.title) && item.propertyTab === this.openTab
      );
    });
  }

   public tabbed(val: number) {
    this.openTab = val;
    this.lookingForData = this.latestPropertyData.filter((data) => {
      return data.propertyTab === val;
    });
  }

}
