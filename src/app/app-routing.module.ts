import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StratScreenComponent } from './strat-screen/strat-screen.component';

const routes: Routes = [
  {path:'', component: StratScreenComponent},
  {path:'game', component: GameComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
