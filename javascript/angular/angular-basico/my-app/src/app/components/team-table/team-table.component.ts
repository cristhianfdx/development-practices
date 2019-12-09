import { Component, OnInit } from '@angular/core';
import { TeamService, TeamsTableHeaders } from 'src/app/services/team.service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { take } from 'rxjs/operators';
import { Countries } from 'src/app/enums/countries';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {

  teams$: Observable<Team[]>;
  tableHeaders = TeamsTableHeaders;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.teamService.getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        if (teams.length === 0) {
          const team: Team = {
            name: '',
            country: Countries.Colombia,
            players: null
          };
        }
      });
  }
}
