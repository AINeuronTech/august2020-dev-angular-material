import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginChildComponent } from '../login-child/login-child.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  parentTitle = 'Hello child!';
  msgFromChild;
  @ViewChild('userDetails') mytextElement: ElementRef;
  @ViewChild('myUsername') userNameElement: ElementRef;
  @ViewChild('myPassword') passwordElement: ElementRef;
  @ViewChild(LoginChildComponent) childElement;

  constructor() {}

  ngOnInit(): void {}

  receiveData(msg) {
    this.msgFromChild = msg;
  }

  addStyle() {
    console.log('mytextElement=====', this.mytextElement);
    this.mytextElement.nativeElement.setAttribute('style', 'color: blue');
    this.mytextElement.nativeElement.setAttribute('style', 'font-size: 30px');
    this.passwordElement.nativeElement.focus();
  }

  onClickFromParent() {
    this.childElement.isVisible = false;
  }
}

