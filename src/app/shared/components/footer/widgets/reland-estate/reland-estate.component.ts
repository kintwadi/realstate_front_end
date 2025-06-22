import { Component } from '@angular/core';
import { relandEstateFooterData } from '../../../../data/footer';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-reland-estate',
    imports: [FeatherIconsComponent, CommonModule, RouterModule],
    templateUrl: './reland-estate.component.html',
    styleUrls: ['./reland-estate.component.scss']
})

export class RelandEstateComponent {

  public relandEstateFooterData = relandEstateFooterData;
  public isRelandData: boolean = false;

  openReland() {
    this.isRelandData = !this.isRelandData;
  }
}
