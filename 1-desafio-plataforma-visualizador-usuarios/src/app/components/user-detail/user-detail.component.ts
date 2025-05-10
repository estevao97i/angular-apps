import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  idSelected!: number
  user: any;

  constructor(
    private readonly activatedRouted: ActivatedRoute, 
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(param => {
      this.idSelected = param['id'];
      this.getUsuario();
    })
  }

  getUsuario() {
    this.userService.getUserById(this.idSelected)
    .subscribe(user => {
      this.user = user[0];
    });
  }
}
