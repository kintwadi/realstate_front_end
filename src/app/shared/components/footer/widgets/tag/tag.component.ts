import { Component } from '@angular/core';
import { tagFooterData } from '../../../../data/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-tag',
    imports: [CommonModule, RouterModule],
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  public tagFooterData = tagFooterData;
  public isTagData: boolean = false;

  openTag() {
    this.isTagData = !this.isTagData;
  }
}
