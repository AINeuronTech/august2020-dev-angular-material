import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit, OnChanges {
  @Input() fromLoginParent;
  @Input() userNameValue;
  @Input() myNameValue;
  @Output() sendData = new EventEmitter();
  yourName = 'abc';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    for (let value in changes) {
      let newValue = value[this.userNameValue];
      let currentValue = JSON.stringify();
      let previousValue = JSON.stringify()
    }

  }

  sendDataToParent() {
    this.sendData.emit('Im coming from login-child component');
  }
}
