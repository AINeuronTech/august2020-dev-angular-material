import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  parentTitle = 'Hello child!';
  msgFromChild;

  constructor() {}

  ngOnInit(): void {
  }

  receiveData(msg) {
    this.msgFromChild = msg;
  }
}

