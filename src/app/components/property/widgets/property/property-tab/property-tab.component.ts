import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PropetyDetailsComponent } from "../../propety-details/propety-details.component";
import { FeaturesComponent } from "../../features/features.component";
import { GalleryComponent } from "../../gallery/gallery.component";
import { PropetyFloorPlanComponent } from "../../propety-floor-plan/propety-floor-plan.component";
import { PropetyLocationComponent } from "../../propety-location/propety-location.component";
import { PropertyBriefComponent } from "../../property-brief/property-brief.component";
import { VideoComponent } from '../../video/video.component';
import { ReviewComponent } from '../../review/review.component';

@Component({
    selector: 'app-property-tab',
    templateUrl: './property-tab.component.html',
    styleUrls: ['./property-tab.component.scss'],
    imports: [CommonModule, PropetyDetailsComponent, FeaturesComponent, GalleryComponent, ReviewComponent,
        PropetyFloorPlanComponent, PropetyLocationComponent, PropertyBriefComponent, VideoComponent]
})
export class PropertyTabComponent {

  @Input() propertyData: any;
  @Input() tabData: any;
  @Input() dataArray: string[];
  @Input() propertyDetailsData: any;

  public active = 1;
  public openTab: string = 'about';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
