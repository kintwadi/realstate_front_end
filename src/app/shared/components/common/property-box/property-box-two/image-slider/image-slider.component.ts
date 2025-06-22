import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { latestForRent } from '../../../../../../shared/interface/property';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-image-slider',
    imports: [CarouselModule, LightboxModule],
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {

  @Input() latestForRentData: latestForRent;
  @Input() tagClass: string;
  @Input() listView: boolean = false;
  @Input() thumbnail: boolean = false;
  @Input() thumbnail_video: boolean = false;
  @Input() gridImages: boolean = false;

  public selectedImage: string;

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  public thumbnailCarouselOptions = {
    items: 4,
    margin: 10,
    center: true,
    loop: true,
    nav: false,
    dots: false,
  };

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
