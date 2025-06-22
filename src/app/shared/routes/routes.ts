import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: 'theme',
    loadChildren: () => import('../../components/home/home.routes')
  },
  {
    path: 'listing/grid-view',
    loadChildren: () => import('../../components/listing/grid-view/grid-view.routes')
  },
  {
    path: 'listing/list-view',
    loadChildren: () => import('../../components/listing/list-view/list-view.routes')
  },
  {
    path: 'listing/tab-layout',
    loadChildren: () => import('../../components/listing/tab-layout/tab-layout.routes')
  },
  {
    path: 'property',
    loadChildren: () => import('../../components/property/property.routes')
  },
  {
    path: 'page',
    loadChildren: () => import('../../components/pages/pages.routes')
  },
  {
    path: 'modules',
    loadChildren: () => import('../../components/modules/modules.routes')
  },
  {
    path: 'agent',
    loadChildren: () => import('../../components/agent/agent.routes')
  },
  {
    path: 'contact',
    loadChildren: () => import('../../components/contact/contact.routes')
  }
]
