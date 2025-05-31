import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {LoaderComponent} from "./loader/loader.component";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {HeroSliderComponent} from "./hero-slider/hero-slider.component";
import {PropertyGridComponent} from "./property-grid/property-grid.component";
import {CityCarouselComponent} from "./city-carousel/city-carousel.component";
import {WhyChooseUsComponent} from "./why-choose-us/why-choose-us.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {TestimonialsSliderComponent} from "./testimonials-slider/testimonials-slider.component";
import {AuthPopupComponent} from "./auth-popup/auth-popup.component";
import {WishListPopupComponent} from "./wish-list-popup/wish-list-popup.component";
import {MainFooterComponent} from "./main-footer/main-footer.component";

@Component({
  selector: 'app-landing-page',
    imports: [
        LoaderComponent,
        MainHeaderComponent,
        HeroSliderComponent,
        PropertyGridComponent,
        CityCarouselComponent,
        WhyChooseUsComponent,
        HowItWorksComponent,
        TestimonialsSliderComponent,
        NgOptimizedImage,
        AuthPopupComponent,
        WishListPopupComponent,
        MainFooterComponent
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
