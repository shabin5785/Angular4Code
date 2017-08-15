import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  username: String = '';
  isBtnDisabled() {
    if (this.username) {
      return false;
    }
    else {
      return true;
    }
  }

  btnClick() {
    this.username = '';
  }

}
