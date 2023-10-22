import { Injectable } from '@angular/core';
import { leaderboard } from './leaderboard/leaderboard.component'

export interface match {
  id: number,
  date: Date,
  hour: Date,
  clubName1: string,
  clubGoals1: number,
  clubName2: string,
  clubGoals2: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * 
   */
  allData: match[] = [
    {
      id: 1,
      date: new Date(),
      hour: new Date(),
      clubName1: 'Arsenal',
      clubGoals1: 1,
      clubName2: 'Chelsea',
      clubGoals2: 2
    },
    // {
    //   id: 2,
    //   date: '2023-01-01',
    //   hour: '12-00',
    //   clubName1: 'Bavaria',
    //   clubGoals1: 4,
    //   clubName2: 'Juventus',
    //   clubGoals2: 4
    // },
    // {
    //   id: 3,
    //   date: '2023-01-01',
    //   hour: '12-00',
    //   clubName1: 'Real Madrid',
    //   clubGoals1: 3,
    //   clubName2: 'Barcelona',
    //   clubGoals2: 2
    // },
    // {
    //   id: 4,
    //   date: '2023-01-01',
    //   hour: '12-00',
    //   clubName1: 'Barcelona',
    //   clubGoals1: 2,
    //   clubName2: 'Chelsea',
    //   clubGoals2: 2
    // },
  ]
  /**
   * 
   */
  getMatch(id: number) {
    return this.allData.filter(el => el.id == id) 
  }
  /**
   * 
   */
  groups:any = {}

  /**
   * 
   */
  commands: string[] = ['Arsenal', 'Bavaria', 'Chelsea', 'Liverpool']
  /**
   * 
   * @returns 
   */
  getLeaderboard() {
    this.groups = {
      Arsenal: 0,
      Chelsea: 0,
      Bavaria: 0,
      Juventus: 0
    }
    this.allData.forEach((el) => {
      if(el.clubGoals1 > el.clubGoals2) {
        let clubName = el.clubGoals1;
        this.groups[clubName] 
        ? this.groups[clubName]+= 3
        : this.groups[clubName] = 3
      } else if(el.clubGoals2 > el.clubGoals1) {
        let clubName = el.clubGoals2;
        this.groups[clubName] 
        ? this.groups[clubName]+= 3
        : this.groups[clubName] = 3
      } else {
        this.groups[el.clubName1] ?
        this.groups[el.clubName1]++ :
        this.groups[el.clubName1] = 1
        this.groups[el.clubName2] ?
        this.groups[el.clubName2]++ :
        this.groups[el.clubName2] = 1
      }
    })
    return this.groups
  }
  
  /**
   * 
   */
  getAllMatch() {
    return this.allData
  }

  /**
   * 
   */
  setMatch(match: match) {
    this.allData.unshift(match);
  }

  /**
   * 
   */
  getClubs() : leaderboard[] {
    return [
      {
        name: 'Arsenal',
        played: 4,
        win: 2,
        draw: 1,
        lose: 0,
        points: 7
      },
      {
        name: 'Bavaria',
        played: 4,
        win: 2,
        draw: 0,
        lose: 0,
        points: 6
      },
      {
        name: 'Manchester City',
        played: 4,
        win: 1,
        draw: 2,
        lose: 1,
        points: 5
      }
    ]
  }
}
