import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Genres } from 'src/app/interfaces/genres/genre.model';
import { States } from 'src/app/interfaces/states/states.model';
import { IUser } from 'src/app/interfaces/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  @Input() statesBrasil: States = [];
  @Input() genres: Genres = [];
  @Input() userSelected: IUser | undefined = {} as IUser;

  @ViewChild('emailControl') emailControl: NgControl = {} as NgControl; 

  samePassword: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userSelected'].currentValue != undefined) {
      console.log(this.userSelected)
    }
  }
}
