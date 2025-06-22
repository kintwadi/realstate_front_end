import { Component } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { ModuleImageRatioData, modulesImageRatioImagesData } from '../../../shared/data/modules';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";

@Component({
    selector: 'app-modules-image-ratio',
    templateUrl: './modules-image-ratio.component.html',
    styleUrls: ['./modules-image-ratio.component.scss'],
    imports: [BreadcrumbComponent, LightboxModule]
})
export class ModulesImageRatioComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Image Ratio';
  public parent = 'Modules';
  public child = 'Image Ratio';

  public ModuleImageRatioData = ModuleImageRatioData;
  public modulesImageRatioImagesData = modulesImageRatioImagesData;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', '#6432b8');
    document.documentElement.style.setProperty('--theme-default2', '#9516d7');

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default2');
  }
}
