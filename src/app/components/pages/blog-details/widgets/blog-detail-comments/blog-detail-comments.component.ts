import { Component, Input } from '@angular/core';
import { comments } from '../../../../../shared/interface/property';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-detail-comments',
    imports: [CommonModule],
    templateUrl: './blog-detail-comments.component.html',
    styleUrls: ['./blog-detail-comments.component.scss']
})
export class BlogDetailCommentsComponent {

  @Input() commentsData: comments;

}
