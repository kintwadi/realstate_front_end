import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { PropertyBoxComponent } from '../../../../shared/components/common/property-box/property-box.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-corporate-property-listing',
    imports: [TitleComponent, PropertyBoxComponent, CommonModule],
    templateUrl: './corporate-property-listing.component.html',
    styleUrls: ['./corporate-property-listing.component.scss']
})

export class CorporatePropertyListingComponent {

  @Input() data: number = 0;
  @Input() class: string = '';
  @Input() tagClass: string;
  @Input() svgClass: boolean = false;
  @Input() containerClass: boolean;

  public desc = 'Residences can be classified into different types of housing tenure can used for same physical type.';
  public title = 'corporate';

  public propertyListingData: latestForRent[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.propertyListingData = response.latestForRent.filter(
        (item) => item.type == this.title
      );
    });
  }
}
