import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  showInfo = false;
  buttonClicks = [];
  count: number = 0;

  displayControl() {
    this.count = this.count + 1;
    this.showInfo = !this.showInfo;
    this.buttonClicks.push(Date.now());
  }

  changeStyle(i) {
    return i >= 4 ? true : false;
  }

  getBackgroundColor(i) {
    return i >= 4 ? 'blue' : 'white';
  }

}
