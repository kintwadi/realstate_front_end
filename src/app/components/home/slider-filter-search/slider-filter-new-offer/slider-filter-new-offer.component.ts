import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { NewOfferComponent } from '../../../../shared/components/common/new-offer/new-offer.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-slider-filter-new-offer',
    imports: [TitleComponent, NewOfferComponent, CommonModule],
    templateUrl: './slider-filter-new-offer.component.html',
    styleUrls: ['./slider-filter-new-offer.component.scss']
})
export class SliderFilterNewOfferComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  @Input() sectionClass: string;

}
