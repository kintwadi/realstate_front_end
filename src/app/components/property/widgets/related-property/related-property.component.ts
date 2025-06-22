import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { PropertyBoxComponent } from '../../../../shared/components/common/property-box/property-box.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-related-property',
    imports: [PropertyBoxComponent, CommonModule],
    templateUrl: './related-property.component.html',
    styleUrls: ['./related-property.component.scss']
})
export class RelatedPropertyComponent {

  @Input() type: string;
  @Input() totalData: number;

  public latestForRentData: latestForRent[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes('slider_filter_search')
      );
    });
  }
}
