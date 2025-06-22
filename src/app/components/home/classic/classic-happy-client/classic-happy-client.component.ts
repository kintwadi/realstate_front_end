import { Component } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { HappyClientsComponent } from '../../../../shared/components/common/happy-clients/happy-clients.component';

@Component({
    selector: 'app-classic-happy-client',
    imports: [TitleComponent, HappyClientsComponent],
    templateUrl: './classic-happy-client.component.html',
    styleUrls: ['./classic-happy-client.component.scss']
})

export class ClassicHappyClientComponent {
  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'classic';
  public happyClientsData: happyClients[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.title
      );
    });
  }
}
