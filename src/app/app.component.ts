import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'august2020-dev-angular';

  loadUserData() {
    if (1 < 2) {
    console.log('User just clicked!');
    alert('I am an alert box!');
    }
  }
}
