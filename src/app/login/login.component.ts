import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginParentTitle = 'From parent component';
  username = 'xyz';
  msgFromChild;
  yourName = "mahdi";

  constructor() {}

  ngOnInit(): void {
    //console.log('From ngOnInit');
  }

  receiveData(msg) {
    this.msgFromChild = msg;
  }

  ngOnDestroy() {
    //console.log('From ngOnDestroy');
  }
}

