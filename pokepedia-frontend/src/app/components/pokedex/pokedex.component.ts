import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokeData } from 'src/app/interfaces/PokeData';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
  constructor(private utilityService: UtilityService) {}

  pokemons: PokeData[] = [];
  dataLoaded: boolean = false;
  abilities: string[] = [];
  types: string[] = [];
  selectedAbilities: string[];
  selectedType: string;
  fetch: boolean = true;
  private subject: Subject<void> = new Subject<void>();
  searchTerm: Subject<string> = new Subject<string>();
  searchedPokemons: PokeData[] = [];

  ngOnInit(): void {
    this.utilityService
      .getPokemonData(0, 20)
      .pipe(takeUntil(this.subject))
      .subscribe((res) => {
        this.pokemons.push(...res);
        console.log('Initial Pokemons', this.pokemons);
        this.dataLoaded = true;
        this.setPokemonAbilities(res);
        this.setPokemonTypes(res);
      });

    this.utilityService.search(this.searchTerm).subscribe((res) => {
      this.searchedPokemons = res;
    });
  }

  setPokemonAbilities(pokemons: PokeData[]): void {
    if (pokemons) {
      pokemons.forEach((pokemon: PokeData) => {
        pokemon.details.abilities.forEach((ability) => {
          const abilityName = ability.ability.name;
          if (!this.abilities.includes(abilityName)) {
            this.abilities.push(abilityName);
            this.abilities.sort();
          }
        });
      });
    }
  }

  setPokemonTypes(pokemons: PokeData[]): void {
    if (pokemons) {
      pokemons.forEach((pokemon: PokeData) => {
        pokemon.details.types.forEach((type) => {
          const typeName = type.type.name;
          if (!this.types.includes(typeName)) {
            this.types.push(typeName);
            this.types.sort();
          }
        });
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    if (fetch) {
      this.utilityService
        .getPokemonData(this.pokemons.length, 20)
        .pipe(takeUntil(this.subject))
        .subscribe((res) => {
          if (this.pokemons.length < 200) {
            this.pokemons.push(...res);
            this.setPokemonAbilities(res);
            this.setPokemonTypes(res);
          } else {
            this.fetch = false;
          }
        });
    }
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
