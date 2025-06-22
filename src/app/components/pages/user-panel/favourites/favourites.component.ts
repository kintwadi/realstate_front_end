import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, pagination } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { addCompareItem } from '../../../../shared/store/actions/compare.action';
import { removeWishlistItem } from '../../../../shared/store/actions/wishlist.action';
import { wishlistState } from '../../../../shared/store/states/wishlist.state';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { UserInfoComponent } from "../widgets/user-info/user-info.component";
import { UserPanelSideMenuComponent } from "../widgets/user-panel-side-menu/user-panel-side-menu.component";
import { GridPanelComponent } from "../../../../shared/components/common/widgets/grid-panel/grid-panel.component";
import { CommonFilterListingComponent } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing.component";
import { FeatherIconsComponent } from "../../../../shared/components/ui/feather-icons/feather-icons.component";
import { PaginationComponent } from "../../../../shared/components/common/widgets/pagination/pagination.component";

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss'],
    imports: [BreadcrumbComponent, UserInfoComponent, UserPanelSideMenuComponent,
        GridPanelComponent, CommonFilterListingComponent, FeatherIconsComponent,
        PaginationComponent]
})
export class FavouritesComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Favourites';

  public totalData: number;
  public latestForRentData: latestForRent[];

  public paginate: pagination; // Pagination use only
  public pageNo: number = 1;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue : string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  @Select(wishlistState.getWishListData) wishlistData$: Observable<latestForRent[]>;

  constructor(
    private propertyService: PropertyService,
    private store:Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;

      this.wishlistData$.subscribe(res => {
      this.latestForRentData = res;

      this.paginate = this.propertyService.getPager(this.latestForRentData?.length, + this.pageNo);

        this.latestForRentData = this.latestForRentData?.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      })
    })
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
  }

  sortFilter(value: string) {
    this.filterValue = value
  }

  setPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  addCompare(data: latestForRent) {
    this.store.dispatch(new addCompareItem(data));
  }

  removeItem(data: number) {
    this.store.dispatch(new removeWishlistItem(data));
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
