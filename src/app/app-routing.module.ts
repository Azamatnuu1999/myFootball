import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { PicturesComponent } from './pictures/pictures.component';
import { MatchComponent } from './match/match.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent 
  },
  {
    path: 'match',
    component: MatchComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/:id',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
