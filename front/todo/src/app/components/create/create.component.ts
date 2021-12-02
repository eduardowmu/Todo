import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  /**instanciando um objeto tipo Todo para criação*/
  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  };
  constructor(private router:Router, private service: TodoService) { }

  ngOnInit(): void {
  }

  create():void {
    this.dateFormat();
    this.service.create(this.todo).subscribe((resposta) => {
      this.service.message("Tarefa criada com sucesso!");
      this.router.navigate(['']);
      /**Caso ocorra algum erro */
    }, err => this.service.message("Erro interno, favor tente novamente."));
  }

  /**Metodo que retorna um valor de data que seja
   * aceito no backend
   */
  dateFormat(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDay()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  voltar():void {
    /**Este método insere a URL o path desejado*/
    this.router.navigate(['']);
  }
}
