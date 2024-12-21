import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/user/user.model';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent implements OnInit {

  @Input() usersList: Users = [];

  ngOnInit(): void {
    
  }
}
