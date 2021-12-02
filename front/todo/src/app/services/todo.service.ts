import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { url } from 'inspector';

@Injectable({providedIn: 'root'})
export class TodoService {
  /*URL da requisição*/
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient, private snackbar:MatSnackBar) { }

  create(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/new`;
    return this.http.post<Todo>(url, todo);
  }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  /**Metodo que ira buscar um objeto Todo do read-all.component
   * pelo ID do objeto selecionado
   */
  findById(id: any): Observable<Todo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Todo>(url);
  } 

  update(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/update`;
    return this.http.put<Todo>(url, todo);
  }

  /**Método que irá deletar um Todo através do ID */
  delete(id: any):Observable<void> {
    /**constante que recebe o path para deleção */
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<void>(url);
  }

  message(msg:String):void {
    this.snackbar.open(`${msg}`, 'OK', {
      horizontalPosition:'end',
      verticalPosition:'top',
      duration: 4000
    });
  }
}