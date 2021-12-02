import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        } else {
          this.list.push(todo);
        }
      })
      this.closed = this.finishedList.length;
      /*
      this.list = resposta;
      this.countClosed();
      */
    })
  }

  delete(id:any):void {
    this.service.delete(id).subscribe((resposta) => {
      /**Se o retorno foi nulo, foi porque deu certo */
      if(resposta === null) {
        this.service.message('Task deletada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);
      } else {
        this.service.message('Erro interno, favor tente novamente');
      }
    })
  }

  goToFinishTask():void {
    this.router.navigate(['finalizados']);
  }

  goToCreateNew():void {
    this.router.navigate(['novo']);
  }

  finalizar(item: Todo):void {
    item.finalizado = true;
    /**Após feito o método update, será feito um
     *arow function para exibir a mensagem e 
     incrementar a quantidade de tasks atualizadas 
     */
    this.service.update(item).subscribe(() => {
      this.service.message('Task finalizada com sucesso!');
      this.list = this.list.filter(todo => todo.id === item.id);
      this.closed++;
    });
  }

  /*
  countClosed():void {
    for(let todo of this.list) {
      if(todo.finalizado) {
        this.closed++;
      }
    }
  }*/
}