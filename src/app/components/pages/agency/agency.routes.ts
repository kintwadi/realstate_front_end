import { Routes } from '@angular/router';
import { AgencyGridComponent } from './agency-grid/agency-grid.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';

export default[
  {
    path: 'agency-profile',
    component: AgencyProfileComponent,
  },
  {
    path: 'agency-grid',
    component: AgencyGridComponent,
  },
  {
    path: 'agency-list',
    component: AgencyListComponent
  },
] as Routes;


