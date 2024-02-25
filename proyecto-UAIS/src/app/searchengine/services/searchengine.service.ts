import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchAllUsersResponse, Users } from '../interfaces/searchengine.interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchengineService {

  private url: string = "https://reqres.in";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<FetchAllUsersResponse>(`${this.url}/api/users?page=2`).pipe(
      map(this.transformIntoUsers)
    )
  }

  private transformIntoUsers(resp: FetchAllUsersResponse) {

    const userList: Users[] = resp.data.map(user => {
      return {
        name: user.first_name,
        last_name: user.last_name,
        picture: user.avatar
      };
    });

    return userList;

  }

}
