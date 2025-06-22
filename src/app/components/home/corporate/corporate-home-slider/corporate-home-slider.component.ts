import { Component } from '@angular/core';
import { homeSectionSlider } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { HomeSectionSliderComponent } from '../../../../shared/components/common/home-section-slider/home-section-slider.component';

@Component({
    selector: 'app-corporate-home-slider',
    imports: [HomeSectionSliderComponent],
    templateUrl: './corporate-home-slider.component.html',
    styleUrls: ['./corporate-home-slider.component.scss']
})

export class CorporateHomeSliderComponent {

  public title = 'corporate';

  public homeSectionSliderData: homeSectionSlider[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(){
    this.propertyService.homeSliderData().subscribe(response => {
      this.homeSectionSliderData = response.homeSection.filter(item => item.type == this.title)
    });
  }

}
