import { Component } from '@angular/core';
import { blogDataHorizontal } from '../../../../data/footer';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-latest-blog-horizontal',
    imports: [CarouselModule, RouterModule],
    templateUrl: './latest-blog-horizontal.component.html',
    styleUrl: './latest-blog-horizontal.component.scss'
})
export class LatestBlogHorizontalComponent {

  public blogDataHorizontal = blogDataHorizontal;

  public options = {
    loop: true,
    nav: false,
    dots:false,
    responsive : {
      0 : {
        items : 1
      },
      600 : {
        items : 2
      },
      900 : {
        items : 3
      }
    }
  }
}
