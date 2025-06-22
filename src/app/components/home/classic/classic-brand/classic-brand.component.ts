import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BrandComponent } from '../../../../shared/components/common/brand/brand.component';

@Component({
    selector: 'app-classic-brand',
    imports: [BrandComponent],
    templateUrl: './classic-brand.component.html',
    styleUrls: ['./classic-brand.component.scss']
})

export class ClassicBrandComponent {

  public title = 'classic';
  public brandData: brand[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
