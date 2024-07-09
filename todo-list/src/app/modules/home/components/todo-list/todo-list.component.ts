import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  listTodo: Todo[] = []
  check: boolean = false

  ngOnInit(): void {
    this.listTodo.push({check: false , description:'tarefa de casa'})
    this.listTodo.push({check: false , description:'dormir'})
    this.listTodo.push({check: false , description:'estudar'})
    this.listTodo.push({check: false , description:'comer'})
  }

  clickCheck(atividade: any) {
    atividade.check = !atividade.check
  }

}
