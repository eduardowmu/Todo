import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
  /*URL da requisição*/
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
}