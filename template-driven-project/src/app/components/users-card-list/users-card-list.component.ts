import { Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IUser, Users } from 'src/app/interfaces/user/user.model';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {

  @Input() usersList: Users = [];
  @Output() userSelected = new EventEmitter<number | null>();

  selectedIndex!: number | null;

  onUserSelected(index: number) {
    if (this.selectedIndex === index) {
      this.userSelected.emit(null);
      this.selectedIndex = null;
      return;
    }
    this.selectedIndex = index;
    this.userSelected.emit(index);
  }
}
