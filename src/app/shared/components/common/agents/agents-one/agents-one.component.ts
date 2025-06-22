import { Component, Input } from '@angular/core';
import { agents } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agents-one',
    imports: [CarouselModule, FeatherIconsComponent, RouterModule, CommonModule],
    templateUrl: './agents-one.component.html',
    styleUrls: ['./agents-one.component.scss']
})
export class AgentsOneComponent {

  @Input() agentsData : agents[] = [];
  @Input() tagClass : string ='';

  public Options = {
    loop: true,
    nav: true,
    dots:false,
    margin: 25,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      668 : {
        items : 2
      },
    }
  }
}
