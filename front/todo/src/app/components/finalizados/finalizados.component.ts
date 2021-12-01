import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {
  /*lista de tarefas já finalizadas*/
  finishedList: Todo[] = [];

  /*Temos uma instancia de TodoService*/
  constructor(private service: TodoService, private router:Router) { }

  /*Toda vez que minha aplicação iniciar, quero chamar
  o seguinte serviço*/
  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if(todo.finalizado) {
          this.finishedList.push(todo); 
        }
      })
    })
  }

  voltar():void {
    /**Este método insere a URL o path desejado*/
    this.router.navigate([''])
  }
}
