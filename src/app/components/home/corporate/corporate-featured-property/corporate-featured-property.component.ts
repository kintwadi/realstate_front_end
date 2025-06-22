import { Component, Input } from '@angular/core';
import { featuredProperty } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { FeaturedPropertyComponent } from '../../../../shared/components/common/featured-property/featured-property.component';

@Component({
    selector: 'app-corporate-featured-property',
    imports: [TitleComponent, FeaturedPropertyComponent],
    templateUrl: './corporate-featured-property.component.html',
    styleUrls: ['./corporate-featured-property.component.scss']
})
export class CorporateFeaturedPropertyComponent {

  @Input() svgClass: boolean;
  @Input() tagClass: string;

  public desc = "Residences can be classified into different type of housing tenure can used for same physical type.";
  public title = 'corporate';

  public featuredProperty : featuredProperty[] = [];

  constructor(public propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.featuredPropertyData().subscribe(response => {
      this.featuredProperty = response.featuredProperty.filter(item => item.type == this.title)
  });
}
}
