import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-modal-login-form',
    imports: [FeatherIconsComponent, CommonModule, RouterModule],
    templateUrl: './modal-login-form.component.html',
    styleUrls: ['./modal-login-form.component.scss']
})

export class ModalLoginFormComponent {

  @Input() tagClass: string;
  @Input() buttonClass: string;

  public isShow: boolean = false;
  public inputType: string = 'password';

  constructor(public modal: NgbModal){}

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
