import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { review } from '../../../../shared/interface/property';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-review',
    imports: [NgbRatingModule, CommonModule],
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  @Input() reviewData: review[];

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
