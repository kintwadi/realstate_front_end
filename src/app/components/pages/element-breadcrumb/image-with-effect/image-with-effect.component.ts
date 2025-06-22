import { Component } from '@angular/core';
import { Grid2Component } from '../../portfolio/grid2/grid2.component';

@Component({
    selector: 'app-image-with-effect',
    imports: [Grid2Component],
    templateUrl: './image-with-effect.component.html',
    styleUrls: ['./image-with-effect.component.scss']
})
export class ImageWithEffectComponent {

  public bgImage = 'assets/images/parallax/3.jpg';
  public title = 'image with effect';
  public parent = 'Home';
  public child = 'image with effect'
  
}
