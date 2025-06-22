import { Component } from '@angular/core';
import { recentAdded } from '../../../../../data/advance-filter';

@Component({
    selector: 'app-recently-added',
    imports: [],
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss']
})

export class RecentlyAddedComponent {

  public recentAdded = recentAdded;

}
