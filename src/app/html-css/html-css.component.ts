import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-css',
  templateUrl: './html-css.component.html',
  styleUrls: ['./html-css.component.scss'],
})
export class HtmlCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loadUserData() {
    if (1 < 2) {
      console.log('User just clicked!');
      alert('I am an alert box!');
    }
  }
}
