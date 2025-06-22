import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { featuredProperty } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-featured-property-two',
    imports: [CarouselModule, CommonModule, RouterModule, CurrencySymbolPipe, LightboxModule],
    templateUrl: './featured-property-two.component.html',
    styleUrls: ['./featured-property-two.component.scss']
})
export class FeaturedPropertyTwoComponent {

  @Input() featuredProperty: featuredProperty[];
  @Input() tagClass: string;

  constructor(public gallery: Gallery, public lightbox: Lightbox, public propertyService: PropertyService){}

  ngOnInit(){}

  public Options = {
    loop: true,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openLightBox(url: string){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({src: url, thumb: url})])
  }

}
