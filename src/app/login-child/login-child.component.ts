import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() fromLoginParent;
  @Input() userNameValue;
  @Input() myNameValue;
  @Output() sendData = new EventEmitter();
  yourName = 'abc';
  constructor() {}

  ngOnInit(): void {
    console.log('From ngOnInit');
  }

  ngOnChanges() {
    console.log('From ngOnChanges');
  }

  sendDataToParent() {
    this.sendData.emit('Im coming from login-child component');
  }

  ngOnDestroy() {
    console.log('From ngOnDestroy');
  }
}
