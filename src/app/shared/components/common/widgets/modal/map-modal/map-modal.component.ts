import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilterBoxComponent } from '../../../home-section-slider/filter-box/filter-box.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonLeafletMapComponent } from '../../common-leaflet-map/common-leaflet-map.component';

@Component({
    selector: 'app-map-modal',
    imports: [FilterBoxComponent, GoogleMapsModule, CommonLeafletMapComponent],
    templateUrl: './map-modal.component.html',
    styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent {

  @Input() data: string;

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6
  };

  constructor(private modal: NgbModal) {}

  modalClose() {
    this.modal.dismissAll();
  }

}
