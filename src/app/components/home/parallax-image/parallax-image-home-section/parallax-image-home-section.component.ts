import { Component } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-parallax-image-home-section',
    imports: [FeatherIconsComponent, CommonModule],
    templateUrl: './parallax-image-home-section.component.html',
    styleUrls: ['./parallax-image-home-section.component.scss']
})
export class ParallaxImageHomeSectionComponent {

   public open: boolean = false;
   public selectedItem: string = 'Any Property type'

  openMenu(){
    this.open =! this.open;
  }

  changedItem(item: string){
    this.selectedItem = item
  }

}
