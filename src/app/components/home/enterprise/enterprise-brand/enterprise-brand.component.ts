import { Component } from '@angular/core';
import { BrandComponent } from '../../../../shared/components/common/brand/brand.component';
import { brand } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
    selector: 'app-enterprise-brand',
    imports: [BrandComponent],
    templateUrl: './enterprise-brand.component.html',
    styleUrls: ['./enterprise-brand.component.scss']
})
export class EnterpriseBrandComponent {

  public title = 'enterprise';

  public brandData: brand[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
