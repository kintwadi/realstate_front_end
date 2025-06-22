import { Component } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { LatestBlogComponent } from '../../../../shared/components/common/latest-blog/latest-blog.component';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';

@Component({
    selector: 'app-enterprise-latest-blog',
    imports: [LatestBlogComponent, TitleComponent],
    templateUrl: './enterprise-latest-blog.component.html',
    styleUrls: ['./enterprise-latest-blog.component.scss']
})
export class EnterpriseLatestBlogComponent {

  public desc = 'See why ProCity is one of the best friends for exploring the city.';
  public title = 'enterprise';

  public latestBlogData: latestBlog[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == this.title);
    });
  }
}
