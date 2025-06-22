import { Component } from '@angular/core';
import { blogData } from '../../../../data/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-latest-blog-vertical',
    imports: [CommonModule, RouterModule],
    templateUrl: './latest-blog-vertical.component.html',
    styleUrls: ['./latest-blog-vertical.component.scss']
})

export class LatestBlogVerticalComponent {

  public blogData = blogData
  public isBlogData: boolean = false;

  openBlog() {
    this.isBlogData = !this.isBlogData;
  }
}
