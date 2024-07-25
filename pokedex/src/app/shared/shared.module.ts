import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [
    PokemonHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokemonHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
