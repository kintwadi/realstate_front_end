import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { img, latestForRent } from '../../../../shared/interface/property';

@Component({
    selector: 'app-property-image-slider-home-section',
    imports: [CarouselModule, LightboxModule],
    templateUrl: './property-image-slider-home-section.component.html',
    styleUrls: ['./property-image-slider-home-section.component.scss']
})
export class PropertyImageSliderHomeSectionComponent {

  @Input() propertyImageSliderHome: img[];
  @Input() propertyDetails: latestForRent;

  public items: GalleryItem[];
  public images: img[] = [];

  public Options = {
    items: 3,
    loop: true,
    nav: false,
    dots: false,
  };

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  openLightBox() {
    this.items = this.propertyImageSliderHome.map(item => new ImageItem({ src: item.url, thumb: item.url }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load(this.items)
  }

  openLightBoxDynamic(data: img[]) {
    this.images = [];
    data.forEach((image) => {
      if (image.fileType == 'image') {
        this.images.push(image)
      }
    })

    this.items = this.images.map((item) => new ImageItem({ src: item.url, thumb: item.url }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load(this.items)
  }
}
