import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, pagination, tagData } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';
import { getCategory } from '../../../../../shared/store/actions/category.action';
import { categoryState } from '../../../../../shared/store/states/category.state';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { PropertyBoxComponent } from '../../property-box/property-box.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-common-filter-property-box',
    imports: [FeatherIconsComponent, PropertyBoxComponent, PaginationComponent, CurrencySymbolPipe],
    templateUrl: './common-filter-property-box.component.html',
    styleUrls: ['./common-filter-property-box.component.scss']
})

export class CommonFilterPropertyBoxComponent {

  @Input() type: string;
  @Input() filter: boolean;
  @Input() map: boolean;
  @Input() thumbnail: boolean = false;
  @Input() thumbnail_video: boolean = false;
  @Input() pagination: boolean = true;
  @Input() gridImages: boolean = false;
  @Input() filterValue: string;
  @Input() sidebarType: string;

  @Output() totalProperty = new EventEmitter<number>();
  @Output() paginationData = new EventEmitter<pagination>();
  @Output() paramsTagData = new EventEmitter<string[]>();
  @Output() categoryData = new EventEmitter<string>();

  public totalItems: number = 0;
  public isOpenFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public active: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_xl_6: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_4: boolean = false;
  public latestForRentData: latestForRent[];
  public paginate: any = {}; // Pagination use only
  public pageNo: number = 1;
  public category: string[] = [];
  public status: string[] = [];
  public rooms: string[] = [];
  public beds: string[] = [];
  public bath: string[] = [];
  public agency: string[] = [];
  public minPrice: string;
  public maxPrice: string;
  public minArea: string;
  public maxArea: string;
  public sortBy: string;
  public tags: tagData[] = [];
  public price: any;
  public area: any;
  public paramsTag: string[];

  @Select(categoryState.category) category$: Observable<latestForRent[]>;

  constructor(
    public propertyService: PropertyService,
    private propertyBoxGridService: PropertyBoxGridService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'] ? params['category'].split(',') : [];
      this.status = params['status'] ? params['status'].split(',') : [];
      this.rooms = params['room'] ? params['room'].split(',') : [];
      this.beds = params['bed'] ? params['bed'].split(',') : [];
      this.bath = params['bath'] ? params['bath'].split(',') : [];
      this.agency = params['agency'] ? params['agency'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
      this.minArea = params['minArea'] ? params['minArea'] : [];
      this.maxArea = params['maxArea'] ? params['maxArea'] : [];
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ? params['sortBy'] : []

      this.price = { minPrice: this.minPrice, maxPrice: this.maxPrice };
      this.area = { minArea: this.minArea, maxArea: this.maxArea };

      this.paramsTag = [...this.category, ...this.status, ...this.rooms, ...this.beds, ...this.bath, ...this.agency];
      this.paramsTagData.emit(this.paramsTag);

      this.store.dispatch(new getCategory(this.paramsTag, this.price, this.area, this.category, this.sortBy));

      this.category$.subscribe((res) => {
        this.latestForRentData = res;
        // Pagination
        this.paginate = this.propertyService.getPager(this.latestForRentData?.length, +this.pageNo);
        this.paginationData.emit(this.paginate);

        this.latestForRentData = this.latestForRentData?.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
      });
    });
  }

  ngOnInit() {
    if (this.type == 'grid-2') {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_xl_4 = false;
    }
    if (this.type == 'grid-3') {
      this.propertyBoxGridService.col_xl_4 = true;
      this.propertyBoxGridService.col_md_6 = true;
    }
    if (this.type == 'map') {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_lg_6 = true;
    }
    if (this.type == 'list') {
      this.propertyBoxGridService.listView = true;
      if (this.sidebarType == 'no_sidebar') {
        this.propertyBoxGridService.col_xl_6 = true;
        this.propertyBoxGridService.col_md_6 = false;
      } else {
        this.propertyBoxGridService.col_xl_12 = true;
        this.propertyBoxGridService.col_md_6 = false;
      }
    }
  }


  public openMenu() {
    this.isOpen = !this.isOpen;
  }

  public openFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  setPage(page: number) {
    this.router.navigate([], {  
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  removePrice() {
    this.price = '';

    let params = {
      minPrice: null,
      maxPrice: null,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  removeArea() {
    this.area = '';

    let params = {
      minArea: null,
      maxArea: null,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  removeTag(tag: string) {
    this.category = this.category.filter((category: string) => category != tag);
    this.status = this.status.filter((status: string) => status != tag);
    this.rooms = this.rooms.filter((room: string) => room != tag);
    this.beds = this.beds.filter((bed: string) => bed != tag);
    this.bath = this.bath.filter((bath: string) => bath != tag);
    this.agency = this.agency.filter((agency: string) => agency != tag);

    let params = {
      category: this.category.length ? this.category.join(',') : null,
      status: this.status.length ? this.status.join(',') : null,
      room: this.rooms.length ? this.rooms.join(',') : null,
      bed: this.beds.length ? this.beds.join(',') : null,
      bath: this.bath.length ? this.bath.join(',') : null,
      agency: this.agency.length ? this.agency.join(',') : null,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xl_4 = this.propertyBoxGridService.col_xl_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
    this.col_xl_6 = this.propertyBoxGridService.col_xl_6;
  }

  ngOnDestroy() {
    this.propertyBoxGridService.listView = false;
    this.propertyBoxGridService.col_lg_6 = false;
    this.propertyBoxGridService.col_md_6 = false;
    this.propertyBoxGridService.col_lg_4 = false;
    this.propertyBoxGridService.col_xxl_3 = false;
    this.propertyBoxGridService.col_6 = false;
    this.propertyBoxGridService.col_xl_12 = false;
    this.propertyBoxGridService.col_xl_4 = false;
    this.propertyBoxGridService.col_xl_6 = false;
  }
}
