import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/interfaces';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss'],
})
export class MemberDetailsComponent implements OnInit {
  @Input() memberDetails: IUser[];
  constructor() {}

  ngOnInit(): void {}
}
