import { Component, EventEmitter, Output } from '@angular/core';
import { category } from '../../../../../data/advance-filter';
import { PropertyService } from '../../../../../../shared/services/property.service';
import { latestForRent } from '../../../../../../shared/interface/property';

@Component({
    selector: 'app-category',
    imports: [],
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Output() categoryValue = new EventEmitter<string>();

  public category = category;
  public totalApartment: latestForRent[] = [];
  public totalVilla: latestForRent[] = []
  public totalFamilyHouse: latestForRent[] = []
  public totalTownHouse: latestForRent[] = []
  public totalOffice: latestForRent[] = []
  public totalDuplex: latestForRent[] = []


  constructor(private propertyService: PropertyService){
    this.propertyService.latestForRentData().subscribe((data) => {
      data.latestForRent.filter((property) => {
        if(property.params){
          if(property.params.includes('apartment')){
              this.totalApartment.push(property)
          }else if(property.params.includes('villa')){
            this.totalVilla.push(property);
          }else if(property.params.includes('family_house')){
            this.totalFamilyHouse.push(property);
          }else if(property.params.includes('town_house')){
            this.totalTownHouse.push(property);
          }else if(property.params.includes('office')){
            this.totalOffice.push(property);
          }
          else if(property.params.includes('duplex')){
            this.totalDuplex.push(property);
          }
        }
      })
    })
  }

  getCategory(value:string){
    this.categoryValue.emit(value)
  }

}
