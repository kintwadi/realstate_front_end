import { Component } from '@angular/core';
import { sellFooterData } from '../../../../data/footer';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sell',
    imports: [FeatherIconsComponent, CommonModule, RouterModule],
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss']
})
export class SellComponent {

  public sellFooterData = sellFooterData;
  public isSellData: boolean = false;

  openSell() {
    this.isSellData = !this.isSellData;
  }
}
