import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent  implements OnInit, AfterViewInit {

  form!: FormGroup
  searchPoke = ''
  searchDebounceT: Subject<string> = new Subject();

  constructor(private pokemonService: PokeApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: new FormControl<string>('')
    })
  }

  ngAfterViewInit(): void {
    this.searchDebounceT.pipe(
      debounceTime(500)
    ).subscribe(res => {
      this.pokemonService.setSearchPokemon(res);
    })
  }

  pesquisaPokemon() {
    this.searchDebounceT.next(this.form.get('search')?.value);
  }
}
