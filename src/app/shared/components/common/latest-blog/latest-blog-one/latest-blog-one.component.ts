import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { latestBlog } from '../../../../../shared/interface/property';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-latest-blog-one',
    imports: [CarouselModule, FeatherIconsComponent, RouterModule, CommonModule],
    templateUrl: './latest-blog-one.component.html',
    styleUrls: ['./latest-blog-one.component.scss']
})
export class LatestBlogOneComponent {

  @Input() latestBlogData: latestBlog[] = [];
  @Input() tagClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3
      }
    },
  };
}
