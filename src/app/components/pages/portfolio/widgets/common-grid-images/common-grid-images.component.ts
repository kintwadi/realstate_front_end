import { Component, Input } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { gridImage } from '../../../../../shared/interface/property';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-grid-images',
    imports: [RouterModule, CommonModule],
    templateUrl: './common-grid-images.component.html',
    styleUrls: ['./common-grid-images.component.scss']
})
export class CommonGridImagesComponent {

  @Input() imagesData: gridImage;
  @Input() gridTitle: boolean = false;
  @Input() type: string = '';
  @Input() index: number;

  constructor(public gallery: Gallery, public lightbox: Lightbox){}

  ngOnInit(){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
}
