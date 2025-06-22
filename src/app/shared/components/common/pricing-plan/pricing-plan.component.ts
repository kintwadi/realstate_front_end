import { Component, Input } from '@angular/core';
import { currency, pricingPlan } from '../../../../shared/interface/property';
import { PricingPlanOneComponent } from './pricing-plan-one/pricing-plan-one.component';

@Component({
    selector: 'app-pricing-plan',
    imports: [PricingPlanOneComponent],
    templateUrl: './pricing-plan.component.html',
    styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent {

  @Input() pricingPlan: pricingPlan[] = [];
  @Input() type: string = '';
  @Input() tagClass: string;
  @Input() currency:currency;

}
