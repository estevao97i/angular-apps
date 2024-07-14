import { Component } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  deleteAllItens!: boolean;
  newTask!: Todo;

  deleteAll(event: boolean) {
    this.deleteAllItens = event;
  }

  addTask(task: Todo) {
    this.newTask = task;
  }
}
