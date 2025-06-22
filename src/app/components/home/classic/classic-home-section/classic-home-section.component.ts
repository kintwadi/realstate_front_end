import { Component } from '@angular/core';
import { homeSectionSlider } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { HomeSectionSliderComponent } from '../../../../shared/components/common/home-section-slider/home-section-slider.component';

@Component({
    selector: 'app-classic-home-section',
    imports: [HomeSectionSliderComponent],
    templateUrl: './classic-home-section.component.html',
    styleUrls: ['./classic-home-section.component.scss']
})
export class ClassicHomeSectionComponent {

  public title = 'classic';
  public homeSectionSliderData: homeSectionSlider[] = [];

  constructor(public propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title
      );
    });
  }
}
