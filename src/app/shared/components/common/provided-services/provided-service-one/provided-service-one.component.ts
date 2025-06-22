import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { providedServices } from '../../../../../shared/interface/property';

@Component({
    selector: 'app-provided-service-one',
    imports: [CommonModule, RouterModule, AngularSvgIconModule],
    templateUrl: './provided-service-one.component.html',
    styleUrls: ['./provided-service-one.component.scss']
})

export class ProvidedServiceOneComponent {

  @Input() providedServices: providedServices;
  @Input() tagClass: string;

}
