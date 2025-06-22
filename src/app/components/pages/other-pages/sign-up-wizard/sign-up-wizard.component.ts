import { Component } from '@angular/core';
import { stepsData } from '../../../../shared/data/sign-up-wizard';
import { accountInformation, addressInformation } from '../../../../shared/interface/property';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { WizardStepComponent } from "./widgets/wizard-step/wizard-step.component";
import { AccountInformationComponent } from "../widgets/account-information/account-information.component";
import { AddressInformationComponent } from "../widgets/address-information/address-information.component";
import { CompletedFormComponent } from "../widgets/completed-form/completed-form.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sign-up-wizard',
    templateUrl: './sign-up-wizard.component.html',
    styleUrls: ['./sign-up-wizard.component.scss'],
    imports: [BreadcrumbComponent, WizardStepComponent, AccountInformationComponent,
        AddressInformationComponent, CompletedFormComponent, CommonModule]
})
export class SignUpWizardComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Sign up wizard';
  public parent = 'Home';
  public child = 'Sign up wizard';

  public stepsData = stepsData;

  public activeSteps: number;
  public accountData: accountInformation;
  public addressData: addressInformation;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    const data = stepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

  receiveFormData(formData: accountInformation) {
    this.accountData = formData;
  }

  receiveAddressData(formData: addressInformation){
    this.addressData = formData;
  }
}
