import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() intervalFired = new EventEmitter<number>();//events holds just a number
  incrementNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.incrementNumber = this.incrementNumber + 1;
      this.intervalFired.emit(this.incrementNumber);
    }, 1000);
    //above inline method, if we use normal fn we have to bind "this".
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
