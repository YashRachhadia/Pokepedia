import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { GamesAndAppsComponent } from './components/games-and-apps/games-and-apps.component';
import { PokeEventComponent } from './components/poke-event/poke-event.component';
import { AboutComponent } from './components/about/about.component';
import { UtilityService } from './services/utility.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AbilitiesFilterPipe } from './pipes/abilities-filter.pipe';
import { TypesFilterPipe } from './pipes/types-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousalComponent,
    HomeComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent,
    PokedexComponent,
    GamesAndAppsComponent,
    PokeEventComponent,
    AboutComponent,
    AbilitiesFilterPipe,
    TypesFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
