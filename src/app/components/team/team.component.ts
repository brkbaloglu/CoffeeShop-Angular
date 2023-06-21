import { Component } from '@angular/core';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  teamitems:any;
  constructor(private service:TeamServiceService){}

  ngOnInit():void{
    this.teamitems = this.service.teamItems;
  }
}
