import { Component, EventEmitter, Input, Output } from '@angular/core';
import { agencyParams, areaFilter, bathParams, bedParams, categoryParams, img, priceFilter, roomsParams, statusParams } from '../../../../shared/interface/property';
import { Options } from '@angular-slider/ngx-slider';
import { AdvanceFilterBoxComponent } from '../advance-filter-box/advance-filter-box.component';
import { AdvanceFilterContactComponent } from './widgets/advance-filter-contact/advance-filter-contact.component';
import { AdvanceFilterRequestExplorationComponent } from './widgets/advance-filter-request-exploration/advance-filter-request-exploration.component';
import { FilterBoxComponent } from '../home-section-slider/filter-box/filter-box.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecentlyAddedComponent } from '../advance-filter-box/widgets/recently-added/recently-added.component';
import { AdvanceFilterMortgageComponent } from './widgets/advance-filter-mortgage/advance-filter-mortgage.component';

@Component({
    selector: 'app-advance-filter',
    imports: [AdvanceFilterContactComponent, AdvanceFilterRequestExplorationComponent,
        FilterBoxComponent, CarouselModule, RecentlyAddedComponent, AdvanceFilterMortgageComponent
    ],
    templateUrl: './advance-filter.component.html',
    styleUrls: ['./advance-filter.component.scss']
})
export class AdvanceFilterComponent {

  @Input() propertyFilterSliderData: img[];
  @Input() contact: boolean = true;
  @Input() featured: boolean = true;
  @Input() mortgage: boolean = true;
  @Input() filter: boolean = true;

  @Output() categoryValue = new EventEmitter<categoryParams>();
  @Output() propertyStatusData = new EventEmitter<statusParams>();
  @Output() propertyTypeData = new EventEmitter<categoryParams>();
  @Output() roomsData = new EventEmitter<roomsParams>();
  @Output() bedsData = new EventEmitter<bedParams>();
  @Output() bathData = new EventEmitter<bathParams>();
  @Output() agencyData = new EventEmitter<agencyParams>();
  @Output() priceFilter: EventEmitter<priceFilter> = new EventEmitter<priceFilter>();
  @Output() areaFilter: EventEmitter<areaFilter> = new EventEmitter<areaFilter>();

  public totalAmount: number;
  public totalInterest: number;
  public instalment: number;

  options: Options = {
    floor: 0,
    ceil: 500,
  };

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };

  getStatus(status: statusParams) {
    this.propertyStatusData.emit(status);
  }

  getType(type: categoryParams) {
    this.propertyTypeData.emit(type);
  }

  getRooms(room: roomsParams) {
    this.roomsData.emit(room);
  }

  getBeds(bed: bedParams) {
    this.bedsData.emit(bed);
  }

  getBath(bath: bathParams) {
    this.bathData.emit(bath);
  }

  getAgency(agency: agencyParams) {
    this.agencyData.emit(agency);
  }

  priceChange(event: priceFilter) {
    this.priceFilter.emit(event);
  }

  areaChange(event: areaFilter) {
    this.areaFilter.emit(event);
  }
}
