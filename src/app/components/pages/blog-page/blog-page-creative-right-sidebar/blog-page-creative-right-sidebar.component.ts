import { Component } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { BlogPageBlogdataComponent } from "../widgets/blog-page-blogdata/blog-page-blogdata.component";
import { BlogPageFilterComponent } from "../widgets/blog-page-filter/blog-page-filter.component";

@Component({
    selector: 'app-blog-page-creative-right-sidebar',
    templateUrl: './blog-page-creative-right-sidebar.component.html',
    styleUrls: ['./blog-page-creative-right-sidebar.component.scss'],
    imports: [BreadcrumbComponent, BlogPageBlogdataComponent, BlogPageFilterComponent]
})
export class BlogPageCreativeRightSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Blog';
  public parent = 'Home';
  public child = 'Blog';

  public latestBlogData: latestBlog[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == 'corporate');
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
