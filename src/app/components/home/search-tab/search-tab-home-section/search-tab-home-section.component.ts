import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterBoxTwoComponent } from '../../../../shared/components/common/home-section-slider/filter-box-two/filter-box-two.component';
import { AnimationDotsComponent } from '../../../../shared/components/common/home-section-slider/animation-dots/animation-dots.component';

@Component({
    selector: 'app-search-tab-home-section',
    imports: [CommonModule, FilterBoxTwoComponent, AnimationDotsComponent],
    templateUrl: './search-tab-home-section.component.html',
    styleUrls: ['./search-tab-home-section.component.scss']
})

export class SearchTabHomeSectionComponent {

  public active = 1;
  public openTab: string = 'sell';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
