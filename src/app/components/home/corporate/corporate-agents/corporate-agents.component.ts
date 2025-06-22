import { Component, Input } from '@angular/core';
import { agents } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { TitleComponent } from '../../../../shared/components/ui/title/title.component';
import { AgentsComponent } from '../../../../shared/components/common/agents/agents.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-corporate-agents',
    imports: [TitleComponent, AgentsComponent, CommonModule],
    templateUrl: './corporate-agents.component.html',
    styleUrls: ['./corporate-agents.component.scss']
})
export class CorporateAgentsComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public title = 'corporate';
  public agentsData: agents[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(){
    this.propertyService.agentsData().subscribe(response => {
      this.agentsData = response.agents.filter(item => item.type == this.title)
  });
}
}
