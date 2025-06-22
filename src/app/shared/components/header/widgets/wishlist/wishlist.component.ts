import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-wishlist',
    imports: [FeatherIconsComponent, RouterModule],
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

}
