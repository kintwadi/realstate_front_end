import { Component } from '@angular/core';
import { peopleSay } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { PeopleSayComponent } from '../../../../shared/components/common/people-say/people-say.component';

@Component({
    selector: 'app-enterprise-people-say',
    imports: [TitleComponent, PeopleSayComponent],
    templateUrl: './enterprise-people-say.component.html',
    styleUrls: ['./enterprise-people-say.component.scss']
})
export class EnterprisePeopleSayComponent {

  public desc = 'Cum doctus civibus efficiantur in imperdiet deterruisset.';
  public title: string = 'enterprise';

  public peopleSayData: peopleSay[];

  constructor(private propertyService: PropertyService) {}
  ngOnInit() {
    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter(
        (item) => item.type == this.title
      );
    });
  }
}
