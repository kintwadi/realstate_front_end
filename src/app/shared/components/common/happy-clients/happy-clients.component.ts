import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';
import { HappyClientOneComponent } from './happy-client-one/happy-client-one.component';
import { HappyClientTwoComponent } from './happy-client-two/happy-client-two.component';
import { HappyClientThreeComponent } from './happy-client-three/happy-client-three.component';

@Component({
    selector: 'app-happy-clients',
    imports: [HappyClientOneComponent, HappyClientTwoComponent, HappyClientThreeComponent],
    templateUrl: './happy-clients.component.html',
    styleUrls: ['./happy-clients.component.scss']
})
export class HappyClientsComponent {

  @Input() happyClientsData: happyClients[] = [];
  @Input() type: string = '';
  @Input() tagClass: string = ''

}
