import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser, Users } from 'src/app/interfaces/user/user.model';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {

  @Input() usersList: Users = [];
  @Output() userSelected = new EventEmitter<number>();

  onUserSelected(index: number) {
    this.userSelected.emit(index);
  }
}
