import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { GenreService } from './services/genre.service';
import { StatesBrazilService } from './services/states-brazil.service';
import { forkJoin } from 'rxjs';
import { UserPlaceHolderService } from './services/user-placeholder.service';
import { IUser, Users } from './interfaces/user/user.model';
import { Genres } from './interfaces/genres/genre.model';
import { States } from './interfaces/states/states.model';
import { UsersPlaceHolder } from './interfaces/user-placeholder/user-placeholder.model';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: Users = [];
  genres: Genres = [];
  statesBrazil: States = [];
  usersPlaceHolder: UsersPlaceHolder = [];
  newUsers: Users = [];
  userIdSelected: number | undefined;
  userSelected: IUser | undefined = undefined;

  constructor(
    private readonly _userService: UserService,
    private readonly _genreService: GenreService,
    private readonly _statesBrazilService: StatesBrazilService,
    private readonly _usersPlaceHolder: UserPlaceHolderService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    forkJoin({
      stateList: this._statesBrazilService.getStatesBrazil(),
      genreList: this._genreService.getGenres(),
      userList: this._userService.getUsers(),
      usersPlaceHolder: this._usersPlaceHolder.getUsersPlaceHolder()
    })
    .subscribe({
      next: ({stateList, genreList, userList, usersPlaceHolder}) => {
        this.statesBrazil = stateList;
        this.genres = genreList;
        this.users = userList;
        this.usersPlaceHolder = usersPlaceHolder

        this.usersUpdatedData();
      }, error: (err) => console.log(err)})
  }

  private usersUpdatedData() {
    this.newUsers = this.users.map(u => {
      // u.state = this.atualizarState(u)

      // u.musics = u.musics.map((music: any) => {
      //   music.genre = this.atualizarGenero(music)
      //   return music;
      // });

      return u;
    });
  }

  private atualizarState(u: any): any {
    return this.statesBrazil.find(state => state.id === u.state)?.descricao || 'estado nao encontrado';
  }

  private atualizarGenero(music: any): any {
    return this.genres.find(genre => genre.id === music.genre)?.description || 'genero nao encontrado';
  }

  onUserSelected(index: number | null) {
    if (index === null) {
      this.userSelected = undefined;
      return;
    }
    const user = this.newUsers[index];

    if (user) {
      this.userIdSelected = index;
      this.userSelected = structuredClone(user);
    }
  }

  formularioSalvar(formulario: NgForm) {
    console.log(formulario)
    this.openDialog(formulario);
  }

  openDialog(formulario: NgForm): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '70%',
      data: [this.userSelected, formulario.value]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
