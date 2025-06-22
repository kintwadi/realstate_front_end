import { Component, EventEmitter, Input, Output } from '@angular/core';
import { agency, baths, beds, category, propertyStatus, propertyType, rooms, location } from '../../../../data/advance-filter';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { agencyParams, areaFilter, bathParams, bedParams, categoryParams, latestForRent, priceFilter, roomsParams, statusParams } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { CommonModule } from '@angular/common';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-filter-box',
    imports: [CommonModule, NgxSliderModule, RouterModule, CommonModule, CurrencySymbolPipe],
    templateUrl: './filter-box.component.html',
    styleUrls: ['./filter-box.component.scss']
})

export class FilterBoxComponent {

  @Input() buttonClass: string = '';
  @Input() slider: boolean = true;
  @Input() label: boolean = true;
  @Input() style: string;
  @Input() filterData: latestForRent[];

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

  public price: priceFilter;
  public area: areaFilter;
  public getStatusParam: string;
  public getTypeParam: string;
  public getRoomsParam: string;
  public getBedParam: string;
  public getBathParam: string;
  public getAgencyParam: string;
  public getMinPriceParams: number;
  public getMaxPriceParams: number;
  public getMinAreaParams: number;
  public getMaxAreaParams: number;
  public totalAmount: number;
  public totalInterest: number;
  public instalment: number;
  public priceMinValue: number;
  public priceMaxValue: number;
  public areaMinValue: number;
  public areaMaxValue: number;
  public maxCeil:number;
  public priceArray: number[] = [];
  public maxPrice: number;
  public areaArray: number[] = [];
  public maxArea: number; 

public options: Options = {
    floor: 0,
    ceil: 7000,
  };

  public areaOptions: Options = {
    floor: 0,
    ceil: 3000
  }
  constructor(private route: ActivatedRoute, private router: Router, public propertyService: PropertyService) {
    this.route.queryParams.subscribe((params) => {
      this.getStatusParam = params['status'];
      this.getTypeParam = params['category'];
      this.getRoomsParam = params['room'];
      this.getBedParam = params['bed'];
      this.getBathParam = params['bath'];
      this.getAgencyParam = params['agency'];
      this.getMinPriceParams = params['minPrice'];
      this.getMaxPriceParams = params['maxPrice'];
      this.getMinAreaParams = params['minArea'];
      this.getMaxAreaParams = params['maxArea'];

      this.priceMinValue = this.getMinPriceParams ? this.getMinPriceParams : 3000
      this.priceMaxValue = this.getMaxPriceParams ? this.getMaxPriceParams : 5000 ;
      this.areaMinValue = this.getMinAreaParams ? this.getMinAreaParams : 1000;
      this.areaMaxValue = this.getMaxAreaParams ? this.getMaxAreaParams : 3000;
    });

    propertyService.latestForRentData().subscribe((data) => {
      data.latestForRent.forEach((price) => {
        this.priceArray.push(price.price);
      });

      data.latestForRent.forEach((area) => {
        this.areaArray.push(area.sqft);
      })

      this.maxPrice = Math.max(...this.priceArray);
      this.maxArea = Math.max(...this.areaArray);

      this.options = {
        floor: 0,
        ceil: this.maxPrice
      }

      this.areaOptions = {
        floor: 0,
        ceil: this.maxArea
      }

      this.options.ceil = this.maxPrice + 1000;
      this.areaOptions.ceil = this.maxArea + 1000
    });
  }

  getStatus(status: Params) {
    this.propertyStatusData.emit({ status: status['target'].value });
  }

  getType(type: Params) {
    this.propertyTypeData.emit({ category: type['target'].value });
  }

  getRooms(room: Params) {
    this.roomsData.emit({ room:  room['target'].value });
  }

  getBeds(bed: Params) {
    this.bedsData.emit({ bed: bed['target'].value });
  }

  getBath(bath: Params) {
    this.bathData.emit({ bath: bath['target'].value });
  }

  getAgency(agency: Params) {
    this.agencyData.emit({ agency: agency['target'].value });
  }

  priceChange(event: Params) {
    this.price = { minPrice: event['value'], maxPrice: event['highValue'] };
    this.priceFilter.emit(this.price);
  }

  areaChange(event: Params) {
    this.area = { minArea: event['value'], maxArea: event['highValue'] };
    this.areaFilter.emit(this.area);
  }
}
