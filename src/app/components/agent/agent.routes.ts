import { Routes } from '@angular/router';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';

export default[
  {
    path: 'agent-profile',
    component: AgentProfileComponent,
  },
  {
    path: 'agent-grid',
    component: AgentGridComponent,
  },
  {
    path: 'agent-list',
    component: AgentListComponent,
  },
  {
    path: 'submit-property',
    component: SubmitPropertyComponent
  },
] as Routes;

