import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent } from '../../../../../shared/interface/property';
import { removeCompareItem } from '../../../../../shared/store/actions/compare.action';
import { addWishlistItem } from '../../../../../shared/store/actions/wishlist.action';
import { compareState } from '../../../../../shared/store/states/compare.state';

@Component({
    selector: 'app-compare-property-data',
    imports: [],
    templateUrl: './compare-property-data.component.html',
    styleUrls: ['./compare-property-data.component.scss']
})
export class ComparePropertyDataComponent {

  @Select(compareState.getCompareData) wishlistData$: Observable<latestForRent[]>;

  public compareData: latestForRent[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private store: Store) { }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.wishlistData$.subscribe((res) => {
      console.log(this.compareData);
      this.compareData = res;
    });
  }

  addWishlist(data: latestForRent) {
    this.store.dispatch(new addWishlistItem(data));
  }

  removeItem(data: number) {
    this.store.dispatch(new removeCompareItem(data));
  }
}
