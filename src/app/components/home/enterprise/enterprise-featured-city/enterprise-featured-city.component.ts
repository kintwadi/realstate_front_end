import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { PropertyInCitiesComponent } from '../../../../shared/components/common/property-in-cities/property-in-cities.component';

@Component({
    selector: 'app-enterprise-featured-city',
    imports: [TitleComponent, PropertyInCitiesComponent],
    templateUrl: './enterprise-featured-city.component.html',
    styleUrls: ['./enterprise-featured-city.component.scss']
})
export class EnterpriseFeaturedCityComponent {

  @Input() title: string;

  public desc = 'See why ProCity is one of the best friends for exploring the city.';

  public propertyInCity: propertyInCity[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
