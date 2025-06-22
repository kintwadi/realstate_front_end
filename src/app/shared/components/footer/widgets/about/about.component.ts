import { Component, Input } from '@angular/core';
import { footerAboutData } from '../../../../data/footer';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [CommonModule, RouterModule, FeatherIconsComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  @Input() icon: boolean = false;

  public footerAboutData = footerAboutData;
  public isAboutData: boolean = false;

  openAbout() {
    this.isAboutData = !this.isAboutData;
  }
}
