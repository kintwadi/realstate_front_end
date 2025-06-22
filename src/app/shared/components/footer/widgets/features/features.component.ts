import { Component } from '@angular/core';
import { featuresFooterData } from '../../../../data/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-features',
    imports: [RouterModule, CommonModule],
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})

export class FeaturesComponent {

  public featuresFooterData = featuresFooterData;
  public isFeatureData: boolean = false;

  openFeature() {
    this.isFeatureData = !this.isFeatureData;
  }
}
