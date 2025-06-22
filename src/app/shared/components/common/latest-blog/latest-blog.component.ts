import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { LatestBlogOneComponent } from './latest-blog-one/latest-blog-one.component';
import { LatestBlogTwoComponent } from './latest-blog-two/latest-blog-two.component';

@Component({
    selector: 'app-latest-blog',
    imports: [LatestBlogOneComponent, LatestBlogTwoComponent],
    templateUrl: './latest-blog.component.html',
    styleUrls: ['./latest-blog.component.scss']
})
export class LatestBlogComponent {

  @Input() latestBlogData: latestBlog[] = [];
  @Input() type: string = '';
  @Input() tagClass: string;

}
