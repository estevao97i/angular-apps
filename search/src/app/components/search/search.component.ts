import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() req: EventEmitter<any> = new EventEmitter();

  form: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null],
      dateInicio: [null],
      dateFim: [null],
      status: [null]
    })
  }

  lStatus: {value: boolean, desc: string}[] = [
    {
      value: true,
      desc: 'ativo'
    },
    {
      value: false,
      desc: 'inativo'
    },
  ]

  pesquisar() {
    this.req.emit(this.form.value)
  }

}
