import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { sliderImagesData } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
    selector: 'app-image-content-home-section',
    imports: [CarouselModule, RouterModule],
    templateUrl: './image-content-home-section.component.html',
    styleUrls: ['./image-content-home-section.component.scss']
})
export class ImageContentHomeSectionComponent {

  public sliderImages: sliderImagesData[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 1500,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(private propertyService: PropertyService) {
    this.propertyService.getSliderData().subscribe((response) => {
      this.sliderImages = response.slider;
    })
  }

}
