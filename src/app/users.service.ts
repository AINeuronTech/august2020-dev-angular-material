import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getTeamMembers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.serviceUrl);
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
