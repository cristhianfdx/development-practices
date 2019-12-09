import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Player } from '../interfaces/player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersDb: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) {
    this.playersDb = db.list('/players', ref => ref.orderByChild('name'));
  }

  getPlayers(): Observable<Player[]> {
    return this.playersDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  addPlayer(player: Player): void {
    this.playersDb.push(player);
  }

  deletePlayer(key: string): void {
    this.db.list('/players').remove(key);
  }

  editPlayer(player: Player): void {
    const $key = player.$key;
    delete(player.$key);
    this.db.list('/players').update($key, player);
  }


}
