import { Component, EventEmitter, Input, Output } from '@angular/core';
import { latestForRent } from '../../../../../shared/interface/property';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pagination',
    imports: [CommonModule],
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() products: latestForRent[] = [];
  @Input() paginate: any = {};
  @Input() total: number;
  @Input() currentPage: number;
  @Input() pageSize: number;

  @Output() setPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
