import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { latestBlog } from '../../../../../shared/interface/property';

@Component({
    selector: 'app-latest-blog-two',
    imports: [CarouselModule, RouterModule],
    templateUrl: './latest-blog-two.component.html',
    styleUrls: ['./latest-blog-two.component.scss']
})
export class LatestBlogTwoComponent {

  @Input() latestBlogData: latestBlog[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  };
}
