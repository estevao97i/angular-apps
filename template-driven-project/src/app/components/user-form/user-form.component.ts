import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { Genres } from 'src/app/interfaces/genres/genre.model';
import { States } from 'src/app/interfaces/states/states.model';
import { Music } from 'src/app/interfaces/user/music.model';
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
  @Output('formularioEmit') formularioEmit = new EventEmitter();

  @ViewChild('emailControl') emailControl: NgControl = {} as NgControl;
  @ViewChildren('favorita') favorita!: any;
  @ViewChild('meuForm') meuForm!: NgForm;

  red = 'red';

  samePassword: string = '';
  dataNascimento!: Date;
  estado: string | null = null;
  displayedColumns: string[] = ['title', 'band', 'genre', 'isFavorite'];
  genreAtualizado: Genres = []

  constructor(private readonly el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userSelected'].currentValue != undefined) {
      this.changeBirthDate();
      this.genreAtualizado = this.genres;
    }
  }

  changeBirthDate() {
    if (!this.userSelected) {
      return;
    }

    const day = this.userSelected.birthDate.split('/').map(Number)[0];
    const month = this.userSelected.birthDate.split('/').map(Number)[1];
    const year = this.userSelected.birthDate.split('/').map(Number)[2];

    this.dataNascimento = new Date(year, month - 1, day);
  }

  changeSenha() {
    this.samePassword = ''
  }

  dataNascimentoChanged(event: Date) {
    if (!this.userSelected) {
      return;
    }
    const [year, month, day] = event.toISOString().split('T')[0].split('-');
    this.userSelected.birthDate = `${day}/${month}/${year}`;
  }

  displayFn(element: number): string {
    const genreFound = this.genres.find(e => e.id === element);
    return genreFound ? genreFound.description : ''
  }

  mudouGenero(text: any) {
    if (typeof text === 'number') return
    this.genreAtualizado = this.genres.filter(e => e.description.toLowerCase().includes(text.toLowerCase()));
  }

  favChanged(_: any, index: number) {
    if (this.userSelected) {
      this.userSelected?.musics.map((elem: Music) => elem.isFavorite = false);
      this.userSelected.musics[index].isFavorite = true
    }
  }

  onFormSubmit(formulario: NgForm) {
    if (formulario.invalid) {

      for (let element of Object.keys(formulario.controls)) {
        const controlActual = formulario.controls[element];

        if (controlActual.invalid) {
          const htmlControl: HTMLElement = this.el.nativeElement.querySelector(`[name=${element}]`)
          htmlControl.focus();
          break;
        }
      }
      return;
    }

    this.formularioEmit.emit(formulario);
  }
}
