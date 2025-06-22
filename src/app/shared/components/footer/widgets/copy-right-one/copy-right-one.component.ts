import { Component, Input } from '@angular/core';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-copy-right-one',
    imports: [FeatherIconsComponent],
    templateUrl: './copy-right-one.component.html',
    styleUrls: ['./copy-right-one.component.scss']
})

export class CopyRightOneComponent {

  @Input() heartIcon?: boolean = false;
  public year = new Date().getFullYear()

 }
