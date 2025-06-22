import { Component, Input } from '@angular/core';
import { layout } from '../../../interface/layout';
import { LayoutService } from '../../../services/layout.service';
import { LoaderComponent } from '../../common/loader/loader.component';
import { TapToTopComponent } from '../tap-to-top/tap-to-top.component';
import { CustomizerComponent } from '../customizer/customizer.component';

@Component({
    selector: 'app-content',
    imports: [LoaderComponent, TapToTopComponent, CustomizerComponent],
    providers: [LayoutService],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Input() data: layout
  @Input() loaderType: string;
  @Input() divClass: string;
  @Input() themeColor1: string;
  @Input() themeColor2: string;
  @Input() localStorageColor1: string;
  @Input() localStorageColor2: string;

  constructor(public layoutService: LayoutService){}
  receiveChildData1(color: string) {
    document.documentElement.style.setProperty(this.data.localStorageColor1, color);
    document.documentElement.style.setProperty('--theme-default', color);
    localStorage.setItem(this.data.localStorageColor1, color);
  }

  receiveChildData2(color: string) {
    if(this.data.localStorageColor2){
      document.documentElement.style.setProperty(this.data.localStorageColor2, color);
      localStorage.setItem(this.data.localStorageColor2, color);
    }
  }
}
