import { Component, Input } from '@angular/core';
import { featuredProperty } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { FeaturedPropertyComponent } from '../../../../shared/components/common/featured-property/featured-property.component';

@Component({
    selector: 'app-slider-filter-featured-property',
    imports: [CommonModule, TitleComponent, FeaturedPropertyComponent],
    templateUrl: './slider-filter-featured-property.component.html',
    styleUrls: ['./slider-filter-featured-property.component.scss']
})

export class SliderFilterFeaturedPropertyComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  @Input() sectionClass: string;

  public tag = "Our";
  public heading = "Featured Property";

  public featuredProperty: featuredProperty[] = [];

  constructor(public propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.featuredPropertyData().subscribe(response => {
      this.featuredProperty = response.featuredProperty.filter(item => item.type.includes(this.title))
  });
}

}
