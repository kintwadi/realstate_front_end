import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {MainFooterComponent} from "../../_components/features/landing-page/main-footer/main-footer.component";

@Component({
    selector: 'app-footer',
    imports: [
        MainFooterComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}
