import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { PropertyBoxComponent } from '../../../../shared/components/common/property-box/property-box.component';

@Component({
    selector: 'app-classic-latest-property',
    imports: [TitleComponent, PropertyBoxComponent],
    templateUrl: './classic-latest-property.component.html',
    styleUrls: ['./classic-latest-property.component.scss']
})
export class ClassicLatestPropertyComponent {

  @Input() latestPropertyData: latestForRent[];

  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'classic';

  constructor(public propertyService: PropertyService){}

}
