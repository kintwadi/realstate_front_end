import { Component, Input } from '@angular/core';
import { LayoutService } from '../../../../../shared/services/layout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-contact-one',
    imports: [CommonModule, RouterModule],
    templateUrl: './contact-one.component.html',
    styleUrls: ['./contact-one.component.scss']
})
export class ContactOneComponent {

  @Input() footerLogo: string;
  @Input() footerDark?: boolean = false;
  @Input() darkFooterLogo: string;

  public isContactOpen: boolean = false;

  constructor(public layout: LayoutService){}

  openContact(){
    this.isContactOpen =! this.isContactOpen;
  }
}
