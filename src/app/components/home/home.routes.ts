import { Routes } from '@angular/router';
import { ClassicComponent } from './classic/classic.component';
import { CorporateComponent } from './corporate/corporate.component';
import { SliderFilterSearchComponent } from './slider-filter-search/slider-filter-search.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ImageContentComponent } from './image-content/image-content.component';
import { ModernComponent } from './modern/modern.component';
import { ParallaxImageComponent } from './parallax-image/parallax-image.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { TypedImageComponent } from './typed-image/typed-image.component';
import { ModernVideoComponent } from './modern-video/modern-video.component';
import { MapVSearchComponent } from './map-v-search/map-v-search.component';
import { MapHSearchComponent } from './map-h-search/map-h-search.component';

export default [
  {
    path: 'slider-filter-search',
    component: SliderFilterSearchComponent,
  },
  {
    path: 'corporate',
    component: CorporateComponent,
  },
  {
    path: 'classic',
    component: ClassicComponent,
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent,
  },
  {
    path: 'image-content',
    component: ImageContentComponent,
  },
  {
    path: 'modern',
    component: ModernComponent,
  },
  {
    path: 'parallax-image',
    component: ParallaxImageComponent,
  },
  {
    path: 'search-tab',
    component: SearchTabComponent,
  },
  {
    path: 'typed-image',
    component: TypedImageComponent,
  },
  {
    path: 'morden-video',
    component: ModernVideoComponent,
  },
  {
    path: 'map-v-search',
    component: MapVSearchComponent,
  },
  {
    path: 'map-h-search',
    component: MapHSearchComponent,
  },
] as Routes;

