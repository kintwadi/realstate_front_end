import { Component, Input } from '@angular/core';
import { agents } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-agents-two',
    imports: [CarouselModule, FeatherIconsComponent, RouterModule, CommonModule],
    templateUrl: './agents-two.component.html',
    styleUrls: ['./agents-two.component.scss']
})

export class AgentsTwoComponent {

  @Input() agentsData: agents[] = [];
  @Input() tagClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  };
}
