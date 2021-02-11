import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokeData } from 'src/app/interfaces/PokeData';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private utilityService: UtilityService) {}

  pokemons: PokeData[];
  dataLoaded: boolean = false;
  games: any[] = [
    {
      image: '../../../assets/images/events-and-games/games1.png',
      name: 'Sword v/s Sheild',
    },
    {
      image: '../../../assets/images/events-and-games/games2.png',
      name: 'CafeMix',
    },
    {
      image: '../../../assets/images/events-and-games/games3.png',
      name: 'Go Tour',
    },
    {
      image: '../../../assets/images/events-and-games/games4.png',
      name: 'Pokemon Go',
    },
  ];
  events: any[] = [
    {
      image: '../../../assets/images/events-and-games/events1.png',
      name: 'Sword v/s Sheild war',
    },
    {
      image: '../../../assets/images/events-and-games/events2.png',
      name: 'Play pokemon',
    },
    {
      image: '../../../assets/images/events-and-games/events3.png',
      name: 'Pokemon card battle',
    },
    {
      image: '../../../assets/images/events-and-games/events4.png',
      name: 'Compete 101',
    },
  ];
  private subject: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    // this.utilityService
    //   .getPokemonData(0, 4)
    //   .pipe(
    //     switchMap((res) => this.getDetails(res)),
    //     takeUntil(this.subject)
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //     for (let i = 0; i < res.length; i++) {
    //       this.pokemons.results[i].details = res[i];
    //       this.pokeCard.push(this.pokemons.results[i]);
    //     }
    //     this.dataLoaded = true;
    //     console.log(this.pokeCard);
    //   });

    this.utilityService
      .getPokemonData(0, 4)
      .pipe(takeUntil(this.subject))
      .subscribe((res) => {
        console.log(res);
        this.pokemons = res;
        this.dataLoaded = true;
      });
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
