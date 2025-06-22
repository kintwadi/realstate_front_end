import { Component } from '@angular/core';
import { Menu, NavService } from '../../../../shared/services/nav.service';
import { MenuComponent } from '../../menu/menu.component';

@Component({
    selector: 'app-header-four',
    imports: [MenuComponent],
    templateUrl: './header-four.component.html',
    styleUrls: ['./header-four.component.scss']
})

export class HeaderFourComponent {

  public menuItems: Menu[] = [];

  constructor(public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => (this.menuItems = menuItems));
  }
}
