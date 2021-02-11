import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PokedexComponent } from '../components/pokedex/pokedex.component';
import { GamesAndAppsComponent } from '../components/games-and-apps/games-and-apps.component';
import { PokeEventComponent } from '../components/poke-event/poke-event.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'games-and-apps', component: GamesAndAppsComponent },
  { path: 'poke-events', component: PokeEventComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
