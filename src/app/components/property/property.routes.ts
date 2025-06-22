import { Routes } from '@angular/router';
import { PropertyImageBoxComponent } from './property-image-box/property-image-box.component';
import { PropertyImageSliderComponent } from './property-image-slider/property-image-slider.component';
import { PropertyInfoTabComponent } from './property-info-tab/property-info-tab.component';
import { PropertyLeftSidebarComponent } from './property-left-sidebar/property-left-sidebar.component';
import { PropertyModalDetailsComponent } from './property-modal-details/property-modal-details.component';
import { PropertyTemplateBreadcrumbComponent } from './property-template-breadcrumb/property-template-breadcrumb.component';
import { PropertyThumbnailImagesComponent } from './property-thumbnail-images/property-thumbnail-images.component';
import { StickyTabComponent } from './sticky-tab/sticky-tab.component';
import { WithoutTopComponent } from './without-top/without-top.component';

export default[
  {
    path: 'sticky-tab',
    component: StickyTabComponent,
  },
  {
    path: 'without-top',
    component: WithoutTopComponent,
  },
  {
    path: 'left-sidebar',
    component: PropertyLeftSidebarComponent,
  },
  {
    path: 'info-tab',
    component: PropertyInfoTabComponent,
  },
  {
    path: 'image-slider',
    component: PropertyImageSliderComponent,
  },
  {
    path: 'thumbnail-image',
    component: PropertyThumbnailImagesComponent,
  },
  {
    path: 'image-box',
    component: PropertyImageBoxComponent,
  },
  {
    path: 'template-breadcrumb',
    component: PropertyTemplateBreadcrumbComponent,
  },
  {
    path: 'modal-details',
    component: PropertyModalDetailsComponent
  },
] as Routes;

