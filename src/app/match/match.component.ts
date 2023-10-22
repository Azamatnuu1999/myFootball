import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent {
  /**
   * 
   * @param data 
   */
  matches:any;
  constructor(private data: DataService, private router: Router) {
    this.matches = data.getAllMatch()
    console.log(this.matches)
  }

  /**
   * 
   */
  getData() {
    this.data.getLeaderboard()
  }

  /**
   * 
   */
  editMatch(id: number) {
    this.router.navigate(['/admin/' + id])
  }
}
