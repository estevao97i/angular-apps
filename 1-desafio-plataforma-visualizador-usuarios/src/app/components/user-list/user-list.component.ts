import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  userService = inject(UserService);
  users$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
