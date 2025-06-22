import { Component } from '@angular/core';
import { propertyOverviewData } from '../../../../../shared/data/user-panel';
import { FeatherIconsComponent } from '../../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-property-overview',
    imports: [FeatherIconsComponent],
    templateUrl: './property-overview.component.html',
    styleUrls: ['./property-overview.component.scss']
})

export class PropertyOverviewComponent {

  public propertyOverviewData = propertyOverviewData;

}
