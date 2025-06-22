import { Component } from '@angular/core';
import { currency } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../directive/outside.directive';

@Component({
    selector: 'app-currency',
    imports: [FeatherIconsComponent, CommonModule, ClickOutsideDirective],
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent {

  public currencyOpen: boolean = false;

  public currencies = [
    {
      name: 'Dollar',
      currency: 'USD',
      symbol: "$",
      price: 1 // price of usd
    },
    {
      name: 'Euro',
      currency: 'EUR',
      symbol: "€",
      price: 0.95 // price of euro
    },
    {
      name: 'Rupees',
      currency: 'INR',
      symbol: "₹",
      price: 83.22 // price of inr
    },
    {
      name: 'Pound',
      currency: 'GBP',
      symbol: "£",
      price: 0.82 // price of euro
    },
  ]

  constructor(private propertyService: PropertyService) { }

  openCurrency() {
    this.currencyOpen = !this.currencyOpen;
  }

  changeCurrency(currency: currency) {
    this.propertyService.Currency = currency;
    if (currency) {
      localStorage.setItem('currency', JSON.stringify(currency))
    }
    this.currencyOpen = false
  }

}
