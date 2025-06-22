import { Component, Input } from '@angular/core';
import { agencyAgent } from '../../../../../shared/interface/property';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agency-agents',
    imports: [RouterModule, CommonModule],
    templateUrl: './agency-agents.component.html',
    styleUrls: ['./agency-agents.component.scss']
})
export class AgencyAgentsComponent {

  @Input() agentsData: agencyAgent;
  
  public isMobile: boolean = false;
  public mobileNumber: string

  ngOnInit(){
    this.mobileNumber = this.agentsData.mobile.replace(
      this.agentsData.mobile.slice(-4), '****' );
  }

  showMobile(data: agencyAgent){
    this.isMobile =! this.isMobile;
    if(this.isMobile){
      this.mobileNumber = data.mobile
    }else{
      this.mobileNumber = data.mobile.replace(data.mobile.slice(-4),"****");
    }
  }

}

