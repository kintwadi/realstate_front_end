import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../../../../../shared/components/common/modal/video-modal/video-modal.component';
import { blogDetails } from '../../../../../shared/interface/property';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-detail',
    imports: [CarouselModule, CommonModule],
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  @Input() blogDetails: blogDetails;
  @Input() type: string;

  public videoUrl = 'https://www.youtube.com/embed/Sz_1tkcU0Co';

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(private modal: NgbModal) {}

  openModal() {
    const modalRef = this.modal.open(VideoModalComponent, { centered: true });
    modalRef.componentInstance.data = this.videoUrl;
  }
}
