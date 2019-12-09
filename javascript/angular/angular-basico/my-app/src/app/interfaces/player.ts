import { SquadNumber } from '../enums/squad-number';
import { Countries } from '../enums/countries';

export interface Player {
  $key?: string;
  name: string;
  lastname: string;
  position: SquadNumber;
  weight: number;
  height: number;
  nationalitity: Countries;
  leftFooted: boolean;
}


