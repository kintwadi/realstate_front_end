import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from '../../../../../shared/components/common/modal/edit-card-modal/edit-card-modal.component';
import { cards } from '../../../../../shared/data/user-panel';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cards-details',
    imports: [CommonModule],
    templateUrl: './cards-details.component.html',
    styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent {

  @Input() cardsData: cards;

  constructor(private modal:NgbModal){}

  editCard(){
    this.modal.open(EditCardModalComponent, { centered: true })
  }
}
