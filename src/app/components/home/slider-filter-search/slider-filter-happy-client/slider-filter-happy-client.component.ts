import { Component, Input } from '@angular/core';
import { HappyClientsComponent } from '../../../../shared/components/common/happy-clients/happy-clients.component';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { happyClients } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
    selector: 'app-slider-filter-happy-client',
    imports: [TitleComponent, HappyClientsComponent],
    templateUrl: './slider-filter-happy-client.component.html',
    styleUrls: ['./slider-filter-happy-client.component.scss']
})
export class SliderFilterHappyClientComponent {

  @Input() tagClass: string = '';
  @Input() title: string;

  public happyClientsData: happyClients[] = [];

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.happyClientsData().subscribe(response => {
      this.happyClientsData = response.clients.filter(item => item.type.includes(this.title))
  });
}
}
