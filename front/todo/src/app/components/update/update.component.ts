import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  };
  constructor(private router:Router, private service: TodoService, 
      /**parametro do tipo ActivatedRoute */
      private route:ActivatedRoute) { }

  /**Sempre que iniciarmos este componente, iremos
   * buscar os dados do Todo selecionado em read-all.component
   */
  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.todo.id).subscribe((resposta) => {
      this.todo = resposta;
    });
  }

  update(item : Todo):void {
    this.dateFormat();
    this.service.update(item).subscribe((resposta) => {
      this.service.message("Tarefa atualizada com sucesso");
      this.router.navigate(['']);
    }, error => this.service.message("Erro ao atualizar tarefa"));
    
  }

  dateFormat(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDay()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  voltar():void {
    /**Este método insere a URL o path desejado*/
    this.router.navigate(['']);
  }
}