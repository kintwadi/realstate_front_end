import { Routes } from '@angular/router';
import { Grid2LeftSidebarComponent } from './2-grid/grid2-left-sidebar/grid2-left-sidebar.component';
import { Grid2RightSidebarComponent } from './2-grid/grid2-right-sidebar/grid2-right-sidebar.component';
import { Grid2NoSidebarComponent } from './2-grid/grid2-no-sidebar/grid2-no-sidebar.component';
import { Grid3LeftSidebarComponent } from './3-grid/grid3-left-sidebar/grid3-left-sidebar.component';
import { Grid3RightSidebarComponent } from './3-grid/grid3-right-sidebar/grid3-right-sidebar.component';
import { Grid3NoSidebarComponent } from './3-grid/grid3-no-sidebar/grid3-no-sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { GoogleMapComponent } from './map/google-map/google-map.component';
import { LeafletMapComponent } from './map/leaflet-map/leaflet-map.component';
import { GoogleMapModalComponent } from './map-modal/google-map-modal/google-map-modal.component';
import { LeftSideGoogleMapComponent } from './left-side-map/left-side-google-map/left-side-google-map.component';
import { LeftSideLeafletMapComponent } from './left-side-map/left-side-leaflet-map/left-side-leaflet-map.component';
import { MapHeaderGoogleMapComponent } from './map-header/map-header-google-map/map-header-google-map.component';
import { MapHeaderLeafletMapComponent } from './map-header/map-header-leaflet-map/map-header-leaflet-map.component';
import { LeafletMapModalComponent } from './map-modal/leaflet-map-modal/leaflet-map-modal.component';
import { OnClickGoogleMapComponent } from './on-click-map/on-click-google-map/on-click-google-map.component';
import { OnClickLeafletMapComponent } from './on-click-map/on-click-leaflet-map/on-click-leaflet-map.component';

export default [
  {
    path: '2-grid/left-sidebar',
    component: Grid2LeftSidebarComponent,
  },
  {
    path: '2-grid/right-sidebar',
    component: Grid2RightSidebarComponent,
  },
  {
    path: '2-grid/no-sidebar',
    component: Grid2NoSidebarComponent,
  },
  {
    path: '3-grid/left-sidebar',
    component: Grid3LeftSidebarComponent,
  },
  {
    path: '3-grid/right-sidebar',
    component: Grid3RightSidebarComponent,
  },
  {
    path: '3-grid/no-sidebar',
    component: Grid3NoSidebarComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: 'map/google-map',
    component: GoogleMapComponent,
  },
  {
    path: 'map/leaflet-map',
    component: LeafletMapComponent,
  },
  {
    path: 'map-modal/google-map',
    component: GoogleMapModalComponent,
  },
  {
    path: 'map-modal/leaflet-map',
    component: LeafletMapModalComponent,
  },
  {
    path: 'left-side-map/google-map',
    component: LeftSideGoogleMapComponent,
  },
  {
    path: 'left-side-map/leaflet-map',
    component: LeftSideLeafletMapComponent,
  },
  {
    path: 'on-click-map/google-map',
    component: OnClickGoogleMapComponent,
  },
  {
    path: 'on-click-map/leaflet-map',
    component: OnClickLeafletMapComponent,
  },
  {
    path: 'map-header/google-map',
    component: MapHeaderGoogleMapComponent,
  },
  {
    path: 'map-header/leaflet-map',
    component: MapHeaderLeafletMapComponent
  },
] as Routes;

