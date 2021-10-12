import { Injectable } from '@angular/core';
import { CocktailAPIResponse, CocktailCategoriesAPIResponse, IngredientAPIResponse } from 'src/app/intefaces/Cocktail';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class CocktailService {

  private cocktaillUrl = 'https://www.thecocktaildb.com/api/json/v1/1';  //

  constructor(private http: HttpClient) { }

  getCocktailsByIngredient(ingredient: string): Observable<CocktailAPIResponse>{
    return this.http.get<CocktailAPIResponse>(`${this.cocktaillUrl}/filter.php?i=${ingredient}`);
  }

  getIngredientByName(ingredient: string): Observable<IngredientAPIResponse> {
    return this.http.get<IngredientAPIResponse>(`${this.cocktaillUrl}/search.php?i=${ingredient}`);
  }

  getCocktailsByName(name: string): Observable<CocktailAPIResponse> {
    return this.http.get<CocktailAPIResponse>(`${this.cocktaillUrl}/search.php?s=${name}`);
  }

  getCocktailById(id: string): Observable<CocktailAPIResponse> {
    return this.http.get<CocktailAPIResponse>(`${this.cocktaillUrl}/lookup.php?i=${id}`);
  }

  getCocktailCategories(): Observable<CocktailCategoriesAPIResponse> {
    return this.http.get<CocktailCategoriesAPIResponse>(`${this.cocktaillUrl}/list.php?c=list`);
  }

  getCocktailsByCategory(category: string): Observable<CocktailAPIResponse> {
    return this.http.get<CocktailAPIResponse>(`${this.cocktaillUrl}/filter.php?c=${category}`);
  }

  getCocktailsByDrinkType(drinkType: string): Observable<CocktailAPIResponse> {
    return this.http.get<CocktailAPIResponse>(`${this.cocktaillUrl}/filter.php?a=${drinkType}`);
  }
}
