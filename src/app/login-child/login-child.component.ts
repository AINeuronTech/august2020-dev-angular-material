import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() childTitle;
  @Output() sendData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('From ngOnInit');
  }

  ngOnChanges() {
    console.log('From ngOnChanges');
  }

  sendDataToParent() {
    this.sendData.emit('Hello Parent');
  }

  ngOnDestroy() {
    console.log('From ngOnDestroy');
  }
}
