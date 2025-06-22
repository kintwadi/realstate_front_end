import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BrandComponent } from '../../../../shared/components/common/brand/brand.component';

@Component({
    selector: 'app-slider-filter-brand',
    imports: [BrandComponent],
    templateUrl: './slider-filter-brand.component.html',
    styleUrls: ['./slider-filter-brand.component.scss']
})
export class SliderFilterBrandComponent {

  public title = 'slider_filter_search';

  public brandData : brand[] = []

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.brandData().subscribe(response => {
      this.brandData = response.brand.filter(item => item.type == this.title)
  });

}
 }
