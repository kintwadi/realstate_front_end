import { Routes } from '@angular/router';
import { ListViewSliderComponent } from './list-view-slider/list-view-slider.component';
import { ListViewThumbnailImageComponent } from './list-view-thumbnail-image/list-view-thumbnail-image.component';
import { ListViewVideoComponent } from './list-view-video/list-view-video.component';
import { ListingLeftSidebarComponent } from './listing/listing-left-sidebar/listing-left-sidebar.component';
import { ListingNoSidebarComponent } from './listing/listing-no-sidebar/listing-no-sidebar.component';
import { ListingRightSidebarComponent } from './listing/listing-right-sidebar/listing-right-sidebar.component';
import { ListViewGoogleMapComponent } from './map/list-view-google-map/list-view-google-map.component';
import { ListViewLeafletMapComponent } from './map/list-view-leaflet-map/list-view-leaflet-map.component';

export default [
  {
    path: 'listing/left-sidebar',
    component: ListingLeftSidebarComponent,
  },
  {
    path: 'listing/right-sidebar',
    component: ListingRightSidebarComponent,
  },
  {
    path: 'listing/no-sidebar',
    component: ListingNoSidebarComponent,
  },
  {
    path: 'map/google-map',
    component: ListViewGoogleMapComponent,
  },
  {
    path: 'map/leaflet-map',
    component: ListViewLeafletMapComponent,
  },
  {
    path: 'slider',
    component: ListViewSliderComponent,
  },
  {
    path: 'thumbnail-image',
    component: ListViewThumbnailImageComponent
  },
  {
    path: 'video',
    component: ListViewVideoComponent
  }
] as Routes;

