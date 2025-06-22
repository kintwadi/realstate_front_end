import { Routes } from '@angular/router';
import { CenterSlideComponent } from './center-slide/center-slide.component';
import { Creative1Component } from './creative1/creative1.component';
import { Creative2Component } from './creative2/creative2.component';
import { Creative3Component } from './creative3/creative3.component';
import { Creative4Component } from './creative4/creative4.component';
import { GridTitle2Component } from './grid-title2/grid-title2.component';
import { GridTitle3Component } from './grid-title3/grid-title3.component';
import { GridTitle4Component } from './grid-title4/grid-title4.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';
import { Masonry3Component } from './masonry3/masonry3.component';
import { Masonry4Component } from './masonry4/masonry4.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

export default[
  {
    path: '2-grid',
    component: Grid2Component,
  },
  {
    path: '3-grid',
    component: Grid3Component,
  },
  {
    path: '4-grid',
    component: Grid4Component,
  },
  {
    path: '2-grid-title',
    component: GridTitle2Component,
  },
  {
    path: '3-grid-title',
    component: GridTitle3Component,
  },
  {
    path: '4-grid-title',
    component: GridTitle4Component,
  },
  {
    path: '3-masonry',
    component: Masonry3Component,
  },
  {
    path: '4-masonry',
    component: Masonry4Component,
  },
  {
    path: 'parallax',
    component: ParallaxComponent,
  },
  {
    path: 'center-slide',
    component: CenterSlideComponent,
  },
  {
    path: 'creative-1',
    component: Creative1Component,
  },
  {
    path: 'creative-2',
    component: Creative2Component,
  },
  {
    path: 'creative-3',
    component: Creative3Component,
  },
  {
    path: 'creative-4',
    component: Creative4Component
  },
  {
    path: 'details',
    component: PortfolioDetailsComponent
  }
] as Routes;

