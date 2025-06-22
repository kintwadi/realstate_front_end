import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../../shared/interface/property';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-provided-service-three',
    imports: [RouterModule, CarouselModule],
    templateUrl: './provided-service-three.component.html',
    styleUrls: ['./provided-service-three.component.scss']
})

export class ProvidedServiceThreeComponent {

  @Input() providedServicesData: providedServices[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768 : {
        items : 2
      },
      1200 : {
        items : 3,
      },
      1400 : {
        items : 4,
      }
    }
  };
}
