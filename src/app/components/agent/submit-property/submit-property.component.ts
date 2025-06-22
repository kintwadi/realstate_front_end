import { Component } from '@angular/core';
import { addPropertyStepsData } from '../../../shared/data/add-property';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { AddPropertyStepsComponent } from '../widgets/add-property-steps/add-property-steps.component';
import { PropertyGeneralDetailsComponent } from '../widgets/property-general-details/property-general-details.component';
import { PropertyAddressDetailsComponent } from '../widgets/property-address-details/property-address-details.component';
import { PropertyGalleryComponent } from '../widgets/property-gallery/property-gallery.component';
import { PropertyConfirmationComponent } from '../widgets/property-confirmation/property-confirmation.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-submit-property',
    templateUrl: './submit-property.component.html',
    styleUrls: ['./submit-property.component.scss'],
    imports: [BreadcrumbComponent, AddPropertyStepsComponent, PropertyGeneralDetailsComponent, PropertyAddressDetailsComponent,
        PropertyGalleryComponent, PropertyConfirmationComponent, CommonModule
    ]
})

export class SubmitPropertyComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Add Property';
  public parent = 'Home';
  public child = 'Add Property';

  public addPropertyStepsData = addPropertyStepsData;
  public activeSteps: number;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    const data = addPropertyStepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  public receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
