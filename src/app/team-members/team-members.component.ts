import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../models/interfaces';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit {
  teamMembers: IUser[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getTeamMembers().subscribe((responseData) => {
      this.teamMembers = responseData;
      console.log(this.teamMembers);
    });
  }
}
