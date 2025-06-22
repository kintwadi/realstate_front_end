import { Component } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BannerComponent } from '../../../../shared/components/common/banner/banner.component';

@Component({
    selector: 'app-classic-banner',
    imports: [BannerComponent],
    templateUrl: './classic-banner.component.html',
    styleUrls: ['./classic-banner.component.scss']
})
export class ClassicBannerComponent {

  public title = 'classic';
  public bannerData: banner[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter((item) => item.type == this.title);
    });
  }
}
