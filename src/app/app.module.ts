import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StratScreenComponent } from './strat-screen/strat-screen.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    StratScreenComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
