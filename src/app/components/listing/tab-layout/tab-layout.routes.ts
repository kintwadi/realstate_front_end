import { Routes } from '@angular/router';
import { TabFullWidthComponent } from './tab-full-width/tab-full-width.component';
import { TabLeftSidebarComponent } from './tab-left-sidebar/tab-left-sidebar.component';
import { TabRightSidebarComponent } from './tab-right-sidebar/tab-right-sidebar.component';

export default[
  {
    path: 'tab-full-width',
    component: TabFullWidthComponent
  },
  {
    path: 'tab-left-sidebar',
    component: TabLeftSidebarComponent
  },
  {
    path: 'tab-right-sidebar',
    component: TabRightSidebarComponent
  }
] as Routes;

