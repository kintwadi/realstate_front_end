import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../../../shared/services/layout.service';
import { LogInModalComponent } from '../../common/modal/log-in-modal/log-in-modal.component';
import { MenuComponent } from '../../menu/menu.component';
import { FeatherIconsComponent } from '../../ui/feather-icons/feather-icons.component';
import { SearchComponent } from '../widgets/search/search.component';

@Component({
    selector: 'app-header-three',
    imports: [RouterModule, CommonModule, MenuComponent,
        SearchComponent, FeatherIconsComponent],
    templateUrl: './header-three.component.html',
    styleUrls: ['./header-three.component.scss']
})

export class HeaderThreeComponent {

  @Input() headerLogo: string;
  @Input() darkHeaderLogo: string;
  @Input() headerClass?: string;

  public darkFooterLogo = 'assets/images/logo/9.png';

  public loginModal: boolean = false;
  public buttonClass: string = '';
  public tagClass: string = '';
  public theme: number;
  public imageURL: string;

  constructor(public layout: LayoutService, private modal: NgbModal, private router: Router) {

    if(window.location.pathname.includes('/theme/classic') ||
       window.location.pathname.includes('/theme/search-tab') ||
       window.location.pathname.includes('/theme/modern-video') ||
       window.location.pathname.includes('/theme/map-v-search') ||
       window.location.pathname.includes('/theme/map-h-search')){
      this.loginModal = true;
      this.buttonClass = 'btn-gradient color-4'
      this.tagClass = 'color-4'
      this.theme = 4;
      this.imageURL = 'assets/images/property/15.jpg';
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
