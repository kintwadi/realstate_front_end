import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buyFooterData } from '../../../../data/footer';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-buy',
    imports: [FeatherIconsComponent, CommonModule, RouterModule],
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss']
})

export class BuyComponent {

  public buyFooterData = buyFooterData;
  public isBuyData: boolean = false;

  openBuy() {
    this.isBuyData = !this.isBuyData;
  }
}
