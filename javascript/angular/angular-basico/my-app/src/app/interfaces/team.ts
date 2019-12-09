import { Player } from './player';
import { Countries } from '../enums/countries';

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}
