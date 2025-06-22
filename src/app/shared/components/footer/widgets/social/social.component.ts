import { Component } from '@angular/core';
import { socialFooterData } from '../../../../data/footer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-social',
    imports: [RouterModule, CommonModule],
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})

export class SocialComponent {

  public socialFooterData = socialFooterData;
  public isSocialData: boolean = false;

  openSocial() {
    this.isSocialData = !this.isSocialData;
  }
}
