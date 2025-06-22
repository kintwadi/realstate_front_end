import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-map',
    imports: [CommonModule],
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  public isMapData: boolean = false;

  openMap() {
    this.isMapData = !this.isMapData;
  }
}
