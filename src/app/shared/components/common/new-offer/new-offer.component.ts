import { Component, Input } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { newOffer } from '../../../interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-new-offer',
    imports: [CarouselModule],
    templateUrl: './new-offer.component.html',
    styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent {

  @Input() title: string = '';

  public newOfferData: newOffer[] = [];

  public Options = {
  loop: true,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1,
    },
    1024 : {
      items : 2
    },
  }
}

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.newOfferData().subscribe(response => {
      this.newOfferData = response.newOffer.filter(item => item.type.includes(this.title))
  });
}


}
