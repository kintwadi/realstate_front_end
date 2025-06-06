import {Component, OnInit, Renderer2} from '@angular/core';
import {CommonModule, NgClass, ViewportScroller} from '@angular/common';
import {RouterOutlet, Router, Event, NavigationEnd} from '@angular/router';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {CustomizerSettingsComponent} from './customizer-settings/customizer-settings.component';
import {CustomizerSettingsService} from './customizer-settings/customizer-settings.service';
import {ToggleService} from './common/sidebar/toggle.service';
import {LoaderComponent} from "./_components/features/landing-page/loader/loader.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, CustomizerSettingsComponent, NgClass, LoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    // Title
    title = 'Imovel';

    // isSidebarToggled
    isSidebarToggled = false;

    constructor(
        public router: Router,
        private toggleService: ToggleService,
        private viewportScroller: ViewportScroller,
        public themeService: CustomizerSettingsService,
        private renderer: Renderer2,
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
    }


    ngOnInit() {

    }

}
