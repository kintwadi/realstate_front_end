import { Component, Input } from '@angular/core';
import { pricingPlan } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { PricingPlanComponent } from '../../../../shared/components/common/pricing-plan/pricing-plan.component';

@Component({
    selector: 'app-corporate-pricing-plan',
    imports: [CommonModule, TitleComponent, PricingPlanComponent],
    templateUrl: './corporate-pricing-plan.component.html',
    styleUrls: ['./corporate-pricing-plan.component.scss']
})
export class CorporatePricingPlanComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public pricingPlan : pricingPlan[] = []

  constructor(public propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.pricingPlanData().subscribe(response => {
      this.pricingPlan = response.pricingPlan.filter(item => item.type == this.title)
  });

}
}
