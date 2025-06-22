import { Routes } from '@angular/router';
import { CardsPaymentComponent } from './cards-payment/cards-payment.component';
import { ComparePropertyComponent } from './compare-property/compare-property.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {authGuard} from "../../../shared/guards/auth.guard";

export default[
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'my-listing',
    component: MyListingComponent,
  },
  {
    path: 'create-property',
    component: CreatePropertyComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'favourite',
    component: FavouritesComponent,
  },
  {
    path: 'compare-property',
    component: ComparePropertyComponent
  },
  {
    path: 'cards-payment',
    component: CardsPaymentComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
] as Routes;

