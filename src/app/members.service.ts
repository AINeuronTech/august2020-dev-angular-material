import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser2[]> {
    return this.http.get<IUser2[]>(this.url);
  }
}

export interface IUser2 {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
}
