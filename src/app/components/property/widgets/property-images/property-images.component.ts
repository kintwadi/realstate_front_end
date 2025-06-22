import { Component, Input } from '@angular/core';
import { img } from '../../../../shared/interface/property';

@Component({
    selector: 'app-property-images',
    imports: [],
    templateUrl: './property-images.component.html',
    styleUrls: ['./property-images.component.scss']
})
export class PropertyImagesComponent {

  @Input() propertyImageData: img[];
  
}
