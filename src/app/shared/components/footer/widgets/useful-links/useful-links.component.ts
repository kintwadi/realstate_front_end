import { Component } from '@angular/core';
import { usefulLinkFooterData } from '../../../../data/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-useful-links',
    imports: [RouterModule, CommonModule],
    templateUrl: './useful-links.component.html',
    styleUrls: ['./useful-links.component.scss']
})

export class UsefulLinksComponent {

  public usefulLinkFooterData = usefulLinkFooterData;
  public isLinkData: boolean = false;

  openLink() {
    this.isLinkData = !this.isLinkData;
  }
}
