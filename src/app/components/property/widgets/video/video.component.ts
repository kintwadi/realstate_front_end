import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../../../../shared/components/common/modal/video-modal/video-modal.component';
import { img } from '../../../../shared/interface/property';

@Component({
    selector: 'app-video',
    imports: [],
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  @Input() videoData: img[];

  constructor(private modal: NgbModal) {}

  openModal(videoUrl : string) {
    const modalRef = this.modal.open(VideoModalComponent, { centered: true });
    modalRef.componentInstance.data = videoUrl;
  }
}
