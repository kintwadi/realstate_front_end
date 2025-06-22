import { Component, Input } from '@angular/core';
import { agencyAgent } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { AgencyAgentsComponent } from '../agency-agents/agency-agents.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-common-agency',
    imports: [AgencyAgentsComponent, CommonModule],
    templateUrl: './common-agency.component.html',
    styleUrls: ['./common-agency.component.scss']
})
export class CommonAgencyComponent {

  @Input() agencyData: agencyAgent[];
  @Input() type: string;
  @Input() totalData: number;

  public isOpenFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public active: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_6: boolean = false;
  public col_xl_4: boolean

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}

  ngOnInit() {
    if (this.type == 'grid-2') {
      this.propertyBoxGridService.col_lg_6 = true;
      this.propertyBoxGridService.col_md_6 = true;
    }
    if (this.type == 'grid-3') {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_xl_4 = true;
      this.propertyBoxGridService.col_lg_4 = false;
      this.propertyBoxGridService.col_6 = false;
      this.propertyBoxGridService.col_lg_6 = false;

    }
    if (this.type == 'map') {
      this.propertyBoxGridService.col_md_6 = true;
      this.propertyBoxGridService.col_lg_6 = true;
    }
    if (this.type == 'list') {
      this.propertyBoxGridService.listView = true;
      this.propertyBoxGridService.col_lg_6 = true;
      this.propertyBoxGridService.col_xl_6 = true;
      this.propertyBoxGridService.col_md_6 = false;
    }
  }

  ngOnDestroy() {
    this.propertyBoxGridService.listView = false;
    this.propertyBoxGridService.col_lg_6 = false;
    this.propertyBoxGridService.col_md_6 = false;
    this.propertyBoxGridService.col_lg_4 = false;
    this.propertyBoxGridService.col_xxl_3 = false;
    this.propertyBoxGridService.col_6 = false;
    this.propertyBoxGridService.col_xl_6 = false;
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_6 = this.propertyBoxGridService.col_xl_6;
    this.col_xl_4 = this.propertyBoxGridService.col_xl_4;
  }
}
