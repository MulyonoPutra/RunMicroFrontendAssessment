import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  env = environment.url;

  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.env}/users`)
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${this.env}/users/${id}`)
  }
}
