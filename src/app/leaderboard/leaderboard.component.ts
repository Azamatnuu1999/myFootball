import { Component } from '@angular/core';
import { DataService } from '../data.service';

export interface leaderboard {
  name: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  points: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  clubs: leaderboard[];
  constructor(private data: DataService) {
    this.clubs = data.getClubs()
  /**
   * 
   */
}


}