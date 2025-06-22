import { Component, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';
import { CurrencyComponent } from '../widgets/currency/currency.component';
import { LanguageComponent } from '../widgets/language/language.component';
import { ProfileComponent } from '../widgets/profile/profile.component';
import { WishlistComponent } from '../widgets/wishlist/wishlist.component';
import { ContactComponent } from '../widgets/contact/contact.component';
import { SearchTwoComponent } from '../widgets/search-two/search-two.component';

@Component({
    selector: 'app-header-two',
    imports: [RouterModule, CommonModule, MenuComponent, LanguageComponent,
        WishlistComponent, CurrencyComponent, ProfileComponent, ContactComponent, SearchTwoComponent],
    templateUrl: './header-two.component.html',
    styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent {

  @Input() headerFix?: boolean = false;
  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() darkFooterLogo: string;
  @Input() darkThemeHeaderLogo?: string;

  public headerFixed: boolean = false;
  public isOpenSearch: boolean = false;

  constructor(public layout: LayoutService){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }

  openSearch(){
    this.isOpenSearch =! this.isOpenSearch;
  }
}
