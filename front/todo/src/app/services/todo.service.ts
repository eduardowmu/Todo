import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class TodoService {
  /*URL da requisição*/
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient, private snackbar:MatSnackBar) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
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