import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  /*indicando quantidade de tipo Todo's estão fechados*/
  closed = 0
  
  /*Instanciando uma classe de Todo*/
  list: Todo[] = []

  /*Temos uma instancia de TodoService*/
  constructor(private service: TodoService) { }

  /*Toda vez que minha aplicação iniciar, quero chamar
  o seguinte serviço*/
  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.countClosed();
    })
  }

  countClosed():void {
    for(let todo of this.list) {
      if(todo.finalizado) {
        this.closed++;
      }
    }
  }
}
