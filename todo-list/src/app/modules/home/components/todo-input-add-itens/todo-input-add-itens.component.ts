import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() taskEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();

  task = new FormControl('');

  salvarTask(task: any) {
    const newTask = task.trim();
    if (!newTask) return
    this.taskEmitter.emit({
      check: false,
      description: newTask
    })
    this.task.reset();
  }

}
