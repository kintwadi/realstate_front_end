import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, RouterModule],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() bgImage: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() child: string;
  @Input() type: string;

}
