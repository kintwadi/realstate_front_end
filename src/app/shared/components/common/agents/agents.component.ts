import { Component, Input } from '@angular/core';
import { agents } from '../../../../shared/interface/property';
import { AgentsOneComponent } from './agents-one/agents-one.component';
import { AgentsTwoComponent } from './agents-two/agents-two.component';
import { AgentsThreeComponent } from './agents-three/agents-three.component';

@Component({
    selector: 'app-agents',
    imports: [AgentsOneComponent, AgentsTwoComponent, AgentsThreeComponent],
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss']
})

export class AgentsComponent {

  @Input() agentsData: agents[] = [];
  @Input() type: string = ''
  @Input() tagClass: string = '';

}
