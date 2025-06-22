import { Component, Input } from '@angular/core';
import { currency, homeSectionSlider } from '../../../../shared/interface/property';
import { SliderOneComponent } from './slider-one/slider-one.component';
import { SliderTwoComponent } from './slider-two/slider-two.component';
import { SliderThreeComponent } from './slider-three/slider-three.component';
import { SliderFourComponent } from './slider-four/slider-four.component';

@Component({
    selector: 'app-home-section-slider',
    imports: [SliderOneComponent, SliderTwoComponent, SliderThreeComponent, SliderFourComponent],
    templateUrl: './home-section-slider.component.html',
    styleUrls: ['./home-section-slider.component.scss']
})
export class HomeSectionSliderComponent {

  @Input() homeSectionSliderData: homeSectionSlider[] = [];
  @Input() type : string = '';

}
