import { Component, Input } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BannerComponent } from '../../../../shared/components/common/banner/banner.component';

@Component({
    selector: 'app-corporate-banner',
    imports: [BannerComponent],
    templateUrl: './corporate-banner.component.html',
    styleUrls: ['./corporate-banner.component.scss']
})
export class CorporateBannerComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public bannerData: banner[] = []

  constructor(private propertyService: PropertyService) { }

  ngOnInit(){
    this.propertyService.bannerData().subscribe(response => {
      this.bannerData = response.banner.filter(item => item.type == this.title)
  });
  }
}
