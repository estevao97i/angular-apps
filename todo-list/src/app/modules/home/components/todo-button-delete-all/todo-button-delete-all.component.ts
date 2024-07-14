import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss']
})
export class TodoButtonDeleteAllComponent {

  @Output() deleteAllEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  deleteAll() {
    this.deleteAllEmitter.emit(true);
  }

}
