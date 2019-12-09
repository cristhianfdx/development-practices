import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Team } from '../interfaces/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const TeamsTableHeaders = ['name', 'country', 'players'];

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsDb: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teamsDb = db.list('/teams', ref => ref.orderByChild('name'));
  }

  getTeams(): Observable<Team[]> {
    return this.teamsDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  addTeam(team: Team): void {
    this.teamsDb.push(team);
  }

  deleteTeam(key: string): void {
    this.db.list('/teams').remove(key);
  }

  editPlayer(team: Team): void {
    const $key = team.$key;
    delete(team.$key);
    this.db.list('/teams').update($key, team);
  }
}
