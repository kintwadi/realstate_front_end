import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { latestForRent } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';
import { addCompareItem } from '../../../../../shared/store/actions/compare.action';
import { addWishlistItem } from '../../../../store/actions/wishlist.action';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-property-box-two',
    imports: [ImageSliderComponent, FeatherIconsComponent, CurrencySymbolPipe],
    templateUrl: './property-box-two.component.html',
    styleUrls: ['./property-box-two.component.scss']
})

export class PropertyBoxTwoComponent {

  @Input() title: string = '';
  @Input() latestForRentData: latestForRent;
  @Input() textColor: boolean = false;
  @Input() tagClass: string;
  @Input() data: number;
  @Input() listView: boolean = false;
  @Input() thumbnail: boolean = false;
  @Input() thumbnail_video: boolean = false;
  @Input() gridImages: boolean = false;

  public listViewBox: boolean = false;
  public col_lg_6: boolean = true;
  public col_md_6: boolean = true;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_md_12: boolean = false;

  public favouriteData: latestForRent[] = [];

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    private propertyBoxGridService: PropertyBoxGridService,
    public propertyService: PropertyService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngDoCheck() {
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
  }

  addWishlist(data: latestForRent) {
    this.store.dispatch(new addWishlistItem(data));
  }

  addCompare(data:latestForRent){
    this.store.dispatch(new addCompareItem(data));
  }

  getDetails(id:number){
    this.router.navigate(['/property/image-slider'], {
      relativeTo: this.route,
      queryParams: { id : id },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
