import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { latestForRent } from '../../../../../shared/interface/property';
import { AdvanceFilterBoxComponent } from '../../advance-filter-box/advance-filter-box.component';
import { AdvanceFilterBoxHorizontialComponent } from '../../advance-filter-box-horizontial/advance-filter-box-horizontial.component';

@Component({
    selector: 'app-common-filter-listing',
    imports: [AdvanceFilterBoxComponent, AdvanceFilterBoxHorizontialComponent],
    templateUrl: './common-filter-listing.component.html',
    styleUrls: ['./common-filter-listing.component.scss']
})

export class CommonFilterListingComponent {

  @Input() style: string;
  @Input() filterData: latestForRent[];

  public categoryValue: string;
  public totalProperty: number;
  public status: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getData(tag: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
