import { Component } from '@angular/core';
import { popularTags } from '../../../../../shared/data/advance-filter';
import { CategoryComponent } from '../../../../../shared/components/common/advance-filter-box/widgets/category/category.component';
import { RecentlyAddedComponent } from '../../../../../shared/components/common/advance-filter-box/widgets/recently-added/recently-added.component';

@Component({
    selector: 'app-blog-page-filter',
    imports: [CategoryComponent, RecentlyAddedComponent],
    templateUrl: './blog-page-filter.component.html',
    styleUrls: ['./blog-page-filter.component.scss']
})
export class BlogPageFilterComponent {

  public popularTags = popularTags;

}
