import { Component, Input } from '@angular/core';
import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-property-image-box-home-section',
    imports: [LightboxModule],
    templateUrl: './property-image-box-home-section.component.html',
    styleUrls: ['./property-image-box-home-section.component.scss']
})
export class PropertyImageBoxHomeSectionComponent {

  @Input() propertyImageSliderImage: any;
  @Input() propertyData: any;

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  openLightBox(url: string) {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({ src: url, thumb: url })])
  }

  open(url: string) {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({ src: url, thumb: url })])
  }
}
