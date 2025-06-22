import { Routes } from '@angular/router';
import { BlogDetailsLeftSidebarComponent } from './blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsNoSidebarComponent } from './blog-details-no-sidebar/blog-details-no-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blog-details-right-sidebar/blog-details-right-sidebar.component';
import { BlogDetailsWithGalleryComponent } from './blog-details-with-gallery/blog-details-with-gallery.component';
import { BlogDetailsWithVideoComponent } from './blog-details-with-video/blog-details-with-video.component';

export default[
  {
    path: 'left-sidebar',
    component: BlogDetailsLeftSidebarComponent,
  },
  {
    path: 'right-sidebar',
    component: BlogDetailsRightSidebarComponent,
  },
  {
    path: 'no-sidebar',
    component: BlogDetailsNoSidebarComponent,
  },
  {
    path: 'detail-with-gallery',
    component: BlogDetailsWithGalleryComponent,
  },
  {
    path: 'detail-with-video',
    component: BlogDetailsWithVideoComponent
  },
] as Routes;

