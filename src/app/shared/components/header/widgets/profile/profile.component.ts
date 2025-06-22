import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../../../common/modal/log-in-modal/log-in-modal.component';
import { Router } from '@angular/router';
import { FeatherIconsComponent } from '../../../ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-profile',
    imports: [FeatherIconsComponent],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  public loginModal: boolean = false;
  public buttonClass: string = '';
  public tagClass: string = '';
  public theme: number;
  public imageURL: string;

  constructor(private modal: NgbModal, private router: Router) {

    if(window.location.pathname.includes('theme/corporate')){
      this.loginModal = true;
      this.buttonClass = 'btn-solid color-3';
      this.tagClass = 'color-3';
      this.theme = 3;
      this.imageURL = 'assets/images/property/11.jpg';
    }
    else if(window.location.pathname.includes('theme/corporate')){
      this.loginModal = true;
      this.buttonClass = 'btn-solid color-7';
      this.tagClass = 'color-7';
      this.theme = 5;
      this.imageURL = 'assets/images/property/25.jpg';
    }
  }


  openModal() {
    if(this.loginModal == true){
      const modalRef = this.modal.open(LogInModalComponent, { centered: true, size: 'lg' });
       modalRef.componentInstance.buttonClass = this.buttonClass;
       modalRef.componentInstance.tagClass = this.tagClass;
       modalRef.componentInstance.theme = this.theme;
       modalRef.componentInstance.imageURL = this.imageURL;

    }else{
      this.router.navigate(['/page/other-pages/log-in'])
    }
  }
}
