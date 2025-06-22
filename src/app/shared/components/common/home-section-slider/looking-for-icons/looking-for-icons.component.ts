import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { lookingForData } from '../../../../data/slider-filter-search';

@Component({
    selector: 'app-looking-for-icons',
    imports: [AngularSvgIconModule, RouterModule],
    templateUrl: './looking-for-icons.component.html',
    styleUrls: ['./looking-for-icons.component.scss']
})
export class LookingForIconsComponent {

  @Input() text : boolean = false;

  public lookingForData = lookingForData;

}
