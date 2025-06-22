import { Component, Input } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { BannerComponent } from '../../../../shared/components/common/banner/banner.component';

@Component({
    selector: 'app-slider-filter-banner',
    imports: [TitleComponent, BannerComponent],
    templateUrl: './slider-filter-banner.component.html',
    styleUrls: ['./slider-filter-banner.component.scss']
})

export class SliderFilterBannerComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  public bannerData: banner[] = []

  constructor(private propertyService : PropertyService) { }

  ngOnInit(){
    this.propertyService.bannerData().subscribe(response => {
      this.bannerData = response.banner.filter(item => item.type.includes(this.title))
  });
  }
}
