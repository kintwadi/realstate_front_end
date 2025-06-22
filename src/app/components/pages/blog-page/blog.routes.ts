import { Routes } from '@angular/router';
import { BlogPageCreativeLeftSidebarComponent } from './blog-page-creative-left-sidebar/blog-page-creative-left-sidebar.component';
import { BlogPageCreativeNoSidebarComponent } from './blog-page-creative-no-sidebar/blog-page-creative-no-sidebar.component';
import { BlogPageCreativeRightSidebarComponent } from './blog-page-creative-right-sidebar/blog-page-creative-right-sidebar.component';
import { BlogPageLeftSidebarComponent } from './blog-page-left-sidebar/blog-page-left-sidebar.component';
import { BlogPageListLeftSidebarComponent } from './blog-page-list-left-sidebar/blog-page-list-left-sidebar.component';
import { BlogPageListNoSidebarComponent } from './blog-page-list-no-sidebar/blog-page-list-no-sidebar.component';
import { BlogPageListRightSidebarComponent } from './blog-page-list-right-sidebar/blog-page-list-right-sidebar.component';
import { BlogPageMasonryLeftSidebarComponent } from './blog-page-masonry-left-sidebar/blog-page-masonry-left-sidebar.component';
import { BlogPageMasonryNoSidebarComponent } from './blog-page-masonry-no-sidebar/blog-page-masonry-no-sidebar.component';
import { BlogPageMasonryRightSidebarComponent } from './blog-page-masonry-right-sidebar/blog-page-masonry-right-sidebar.component';
import { BlogPageMixGridLeftSidebarComponent } from './blog-page-mix-grid-left-sidebar/blog-page-mix-grid-left-sidebar.component';
import { BlogPageMixGridRightSidebarComponent } from './blog-page-mix-grid-right-sidebar/blog-page-mix-grid-right-sidebar.component';
import { BlogPageMixListLeftSidebarComponent } from './blog-page-mix-list-left-sidebar/blog-page-mix-list-left-sidebar.component';
import { BlogPageMixListRightSidebarComponent } from './blog-page-mix-list-right-sidebar/blog-page-mix-list-right-sidebar.component';
import { BlogPageNoSidebarComponent } from './blog-page-no-sidebar/blog-page-no-sidebar.component';
import { BlogPageRightSidebarComponent } from './blog-page-right-sidebar/blog-page-right-sidebar.component';

export default[
  {
    path: 'left-sidebar',
    component: BlogPageLeftSidebarComponent,
  },
  {
    path: 'right-sidebar',
    component: BlogPageRightSidebarComponent,
  },
  {
    path: 'no-sidebar',
    component: BlogPageNoSidebarComponent,
  },
  {
    path: 'creative-left-sidebar',
    component: BlogPageCreativeLeftSidebarComponent,
  },
  {
    path: 'creative-right-sidebar',
    component: BlogPageCreativeRightSidebarComponent,
  },
  {
    path: 'creative-no-sidebar',
    component: BlogPageCreativeNoSidebarComponent,
  },
  {
    path: 'list-left-sidebar',
    component: BlogPageListLeftSidebarComponent,
  },
  {
    path: 'list-right-sidebar',
    component: BlogPageListRightSidebarComponent,
  },
  {
    path: 'list-no-sidebar',
    component: BlogPageListNoSidebarComponent,
  },
  {
    path: 'masonry-left-sidebar',
    component: BlogPageMasonryLeftSidebarComponent,
  },
  {
    path: 'masonry-right-sidebar',
    component: BlogPageMasonryRightSidebarComponent,
  },
  {
    path: 'masonry-no-sidebar',
    component: BlogPageMasonryNoSidebarComponent,
  },
  {
    path: 'mix-list-left-sidebar',
    component: BlogPageMixListLeftSidebarComponent,
  },
  {
    path: 'mix-list-right-sidebar',
    component: BlogPageMixListRightSidebarComponent,
  },
  {
    path: 'mix-grid-left-sidebar',
    component: BlogPageMixGridLeftSidebarComponent,
  },
  {
    path: 'mix-grid-right-sidebar',
    component: BlogPageMixGridRightSidebarComponent
  },
] as Routes;

