import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  agency,
  baths,
  beds,
  category,
  location,
  propertyStatus,
  propertyType,
  rooms,
} from '../../../data/advance-filter';
import { FilterBoxService } from '../../../../shared/services/filter-box.service';
import { agencyParams, areaFilter, bathParams, bedParams, categoryParams, priceFilter, roomsParams, statusParams } from '../../../../shared/interface/property';
import { CommonModule } from '@angular/common';
import { FilterBoxComponent } from '../home-section-slider/filter-box/filter-box.component';
import { Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-advance-filter-box-horizontial',
    imports: [CommonModule, FilterBoxComponent],
    templateUrl: './advance-filter-box-horizontial.component.html',
    styleUrls: ['./advance-filter-box-horizontial.component.scss']
})

export class AdvanceFilterBoxHorizontialComponent {

  @Input() isOpenFilter: boolean;

  @Output() categoryValue = new EventEmitter<string>();
  @Output() propertyStatusData = new EventEmitter<statusParams>();
  @Output() propertyTypeData = new EventEmitter<categoryParams>();
  @Output() roomsData = new EventEmitter<roomsParams>();
  @Output() bedsData = new EventEmitter<bedParams>();
  @Output() bathData = new EventEmitter<bathParams>();
  @Output() agencyData = new EventEmitter<agencyParams>();
  @Output() priceFilter: EventEmitter<priceFilter> = new EventEmitter<priceFilter>();
  @Output() areaFilter: EventEmitter<areaFilter> = new EventEmitter<areaFilter>();

  public propertyStatus = propertyStatus;
  public propertyType = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agency = agency;
  public category = category;

  public priceMinValue: number = 75;
  public priceMaxValue: number = 300;
  public areaMinValue: number = 75;
  public areaMaxValue: number = 300;

  public options: Options = {
    floor: 0,
    ceil: 500,
  };

  constructor(public filterBoxService: FilterBoxService) {}

  closeFilter() {
    this.filterBoxService.isOpenFilter = false;
  }

  receiveChildData(categoryValue: string) {
    this.categoryValue.emit(categoryValue);
  }

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
