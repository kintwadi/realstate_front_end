import { Component } from '@angular/core';
import { PropertyService } from '../../../../../shared/services/property.service';
import { agency, baths, beds, category, propertyStatus, propertyType, rooms, location } from '../../../../data/advance-filter';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { RouterModule } from '@angular/router';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-filter-box-three',
    imports: [NgxSliderModule, RouterModule, CurrencySymbolPipe],
    templateUrl: './filter-box-three.component.html',
    styleUrls: ['./filter-box-three.component.scss']
})
export class FilterBoxThreeComponent {

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

  public  options: Options = {
    floor: 0,
    ceil: 500,
  };

  constructor(public propertyService: PropertyService){}
}
