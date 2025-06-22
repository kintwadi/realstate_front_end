import { Component, Input } from '@angular/core';
import { latestForSale } from '../../../../../shared/interface/property';
import { PropertyService } from '../../../../../shared/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencySymbolPipe } from '../../../../pipe/currency-symbol.pipe';

@Component({
    selector: 'app-property-box-one',
    imports: [CommonModule, CurrencySymbolPipe],
    templateUrl: './property-box-one.component.html',
    styleUrls: ['./property-box-one.component.scss']
})

export class PropertyBoxOneComponent {

  @Input() propertyData: latestForSale;
  @Input() tagClass: string;

  constructor(
    public propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router) {}

  getDetails(id:string){
    this.router.navigate(['/property/image-box'], {
      relativeTo: this.route,
      queryParams: { id : id },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
