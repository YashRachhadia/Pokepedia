import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokeData } from '../interfaces/PokeData';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private httpClient: HttpClient) {}

  private pokeURL = environment.pokemonURL;

  getPokemonData(offset, limit): Observable<PokeData[]> {
    return this.httpClient
      .get<PokeData[]>(`${this.pokeURL}?offset=${offset}&limit=${limit}`)
      .pipe(catchError(this.handleError));
  }

  searchEntries(query): Observable<any> {
    if (query) {
      return this.httpClient
        .get(`${this.pokeURL}/${query}`)
        .pipe(catchError(this.handleError));
    } else {
      return new Observable((observer) => {
        observer.next([]);
      });
    }
  }

  search(queries: Observable<string>): Observable<any> {
    return queries.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((res) => this.searchEntries(res))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error occurred:', error.error.message);
    } else {
      console.error(
        `API returned with error ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
}
