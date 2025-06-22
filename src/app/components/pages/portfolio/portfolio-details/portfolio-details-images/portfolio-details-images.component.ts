import { Component, Input } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { creative3 } from '../../../../../shared/interface/property';

@Component({
    selector: 'app-portfolio-details-images',
    imports: [],
    templateUrl: './portfolio-details-images.component.html',
    styleUrls: ['./portfolio-details-images.component.scss']
})

export class PortfolioDetailsImagesComponent {

  @Input() imagesData: creative3;
  @Input() index: number;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  ngOnInit() {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
}
