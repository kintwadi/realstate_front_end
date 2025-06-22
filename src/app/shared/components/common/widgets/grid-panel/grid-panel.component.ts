import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterBoxService } from '../../../../../shared/services/filter-box.service';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { MapModalComponent } from '../modal/map-modal/map-modal.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { pagination } from '../../../../../shared/interface/property';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-grid-panel',
    imports: [CommonModule, FeatherIconsComponent],
    templateUrl: './grid-panel.component.html',
    styleUrls: ['./grid-panel.component.scss']
})

export class GridPanelComponent {

  @Input() filter: boolean;
  @Input() mapButton: boolean = false;
  @Input() mapType: string;
  @Input() viewMap: boolean = false;
  @Input() grid: boolean = true;
  @Input() tab: boolean = false;
  @Input() gridOption: boolean = true;
  @Input() totalData: number = 35;
  @Input() paginationData: pagination;
  @Input() agency: boolean = false;
  @Input() gridOptions: boolean = false;
  @Input() sidebarType: string;
  @Input() isList: boolean = false;

  @Output() tabValue = new EventEmitter<string>();
  @Output() filterValue = new EventEmitter<string>();

  public activeGrid:string;
  public active = 1;
  public openTab: string = '';
  public getSortParams: string;
  public isOpenFilter: boolean = false;
  public isOpenLeftFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_md_12: boolean = false;

  public containers = [];

  constructor(
    private propertyBoxGridService: PropertyBoxGridService,
    private filterBoxService: FilterBoxService,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.getSortParams = params['sortBy'] ? params['sortBy'] : ''
    })

  }

  ngOnInit() {
    this.tabValue.emit('');
    if(this.isList){
      this.activeGrid = 'list'
    }else{
      this.activeGrid = 'grid'
    }
  }

  gridOpens() {
    this.activeGrid = 'grid';
    this.listView = false;
    if(window.location.pathname.includes('/listing/grid-view/2-grid')){
      this.propertyBoxGridService.grid2();
    }else if(window.location.pathname.includes('/listing/grid-view/3-grid')){
      this.propertyBoxGridService.grid3();
    }else if(this.agency){
      this.propertyBoxGridService.grid3();
    }
    else {
      this.propertyBoxGridService.grid2();
    }
  }

  listOpens() {
    this.activeGrid = 'list';
    this.listView = true;
    if(this.sidebarType == 'no_sidebar'){
      this.propertyBoxGridService.list();
    }else if(this.agency){
      this.propertyBoxGridService.list();
    }
    else{
      this.propertyBoxGridService.listOpen();
    }
  }

  grid2s() {
    this.listView = false;
    this.propertyBoxGridService.grid2();
  }

  grid3s() {
    this.listView = false;
    this.propertyBoxGridService.grid3();
  }
  grid4s() {
    this.listView = false;
    this.propertyBoxGridService.grid4();
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
  }

  openModal(value: boolean) {
    if (value == false) {
      const modalRef = this.modal.open(MapModalComponent, { size: 'xl' });
      modalRef.componentInstance.data = this.mapType;
    }
    if ((value = true)) {
      this.filterBoxService.viewMap = !this.filterBoxService.viewMap;
    }
  }

  public openMenu() {
    this.isOpen = !this.isOpen;
  }

  public openFilter() {
    this.filterBoxService.isOpenFilter = !this.filterBoxService.isOpenFilter;
  }

  public openLeftFilter() {
    this.filterBoxService.isOpenLeftFilter = true;
  }

  public tabbed(val: string) {
    this.tabValue.emit(val);
    this.openTab = val;
  }

  public sortFilter(value: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value['target'].value },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
    this.filterValue.emit(value['target'].value);
  }
}
