import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { detailsProperty } from '../../../../shared/interface/property';
import { RequestExplorationFormComponent } from '../request-exploration-form/request-exploration-form.component';

@Component({
    selector: 'app-gallery',
    imports: [RequestExplorationFormComponent, CarouselModule],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() galleryImagesData: detailsProperty[];
  @Input() requestForm: boolean = false;

  public selectedImage: string;

  public Options = {
    items: 1,
    loop: true,
    nav: false,
    dots: false
  };

  public thumbnailCarouselOptions = {
    items: 5,
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
