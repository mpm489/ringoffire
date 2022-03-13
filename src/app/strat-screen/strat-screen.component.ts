import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strat-screen',
  templateUrl: './strat-screen.component.html',
  styleUrls: ['./strat-screen.component.scss']
})
export class StratScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newGame(){
    //Start game
    this.router.navigateByUrl('/game');
  }

}
