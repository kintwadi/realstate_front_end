import { Component, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';
import { LanguageComponent } from '../widgets/language/language.component';
import { WishlistComponent } from '../widgets/wishlist/wishlist.component';
import { CurrencyComponent } from '../widgets/currency/currency.component';
import { ProfileComponent } from '../widgets/profile/profile.component';

@Component({
    selector: 'app-header-one',
    imports: [RouterModule, CommonModule, MenuComponent, LanguageComponent,
        WishlistComponent, CurrencyComponent, ProfileComponent],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent {

  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() headerClass?: string = '';
  @Input() headerFix?: boolean = false;

  public headerFixed: boolean = false;

  constructor(public layout: LayoutService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }
}
