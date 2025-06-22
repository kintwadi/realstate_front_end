import { Component } from '@angular/core';
import { banner, brand } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { BannerComponent } from "../../../shared/components/common/banner/banner.component";
import { TitleComponent } from "../../../shared/components/ui/title/title.component";
import { BrandComponent } from "../../../shared/components/common/brand/brand.component";

@Component({
    selector: 'app-modules-full-banner',
    templateUrl: './modules-full-banner.component.html',
    styleUrls: ['./modules-full-banner.component.scss'],
    imports: [BannerComponent, TitleComponent, BrandComponent]
})
export class ModulesFullBannerComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public bannerTitle1 = 'enterprise';
  public bannerTitle2 = 'image_content';
  public bannerTitle3 = 'corporate';
  public brandTitle1 = 'enterprise';

  public brandData1: brand[] = [];
  public bannerData1: banner[] = [];
  public bannerData2: banner[] = [];
  public bannerData3: banner[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData1 = response.banner.filter((item) => item.type == this.bannerTitle1);
      this.bannerData2 = response.banner.filter((item) => item.type.includes(this.bannerTitle2));
      this.bannerData3 = response.banner.filter((item) => item.type == this.bannerTitle3);
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData1 = response.brand.filter((item) => item.type == this.brandTitle1);
    });
  }
}
