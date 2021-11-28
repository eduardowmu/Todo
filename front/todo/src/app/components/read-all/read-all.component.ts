import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  /*Instanciando uma classe de Todo*/
  list: Todo[] = [
    {
      titulo: "Teste",
      descricao: "Teste Angular fullstack",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Teste 2",
      descricao: "Teste Angular fullstack 2",
      dataParaFinalizar: new Date,
      finalizado: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
