import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../domain/todo';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  env = environment.url;

  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.env}/todos`)
  }

  findById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.env}/todos/${id}`)
  }

  remove(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.env}/todos/${id}`)
  }

  update(id: string, body: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.env}/todos/${id}`, body)
  }

  create(body: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.env}/todos`, body)
  }
}
