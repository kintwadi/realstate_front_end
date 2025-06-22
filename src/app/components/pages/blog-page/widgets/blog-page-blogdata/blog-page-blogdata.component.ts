import { Component, Input } from '@angular/core';
import { latestBlog } from '../../../../../shared/interface/property';
import { FeatherIconsComponent } from "../../../../../shared/components/ui/feather-icons/feather-icons.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-page-blogdata',
    templateUrl: './blog-page-blogdata.component.html',
    styleUrls: ['./blog-page-blogdata.component.scss'],
    imports: [FeatherIconsComponent, RouterModule, CommonModule]
})
export class BlogPageBlogdataComponent {

  @Input() latestBlogData: latestBlog;
  @Input() date: boolean = true;
  @Input() type: string = '';
  @Input() masonry: boolean = false;

}
