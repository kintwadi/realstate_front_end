import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-video-modal',
    imports: [],
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {

  @Input() data: string = '';

  constructor(private modal: NgbModal, public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  close() {
    this.modal.dismissAll();
  }
}
