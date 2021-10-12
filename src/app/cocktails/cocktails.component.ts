import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Cocktail } from '../intefaces/Cocktail';
import { CocktailService } from '../services/cocktail/cocktail.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailComponent implements OnInit {

  // Listado de cocktails
  cocktails : Cocktail[] = [];

  // Search variables
  searchValue: string = '';

  searchTypes: string[] = ['Name','Ingredients'];

  searchType: string = this.searchTypes[0];
  
  // Filter variables
  categoriesFilter: string[] = ['All'];
  selectedCategory: string = this.categoriesFilter[0];

  alcoholicFilter: string[] = ['All','Alcoholic', 'Non_Alcoholic'];
  selectedAlcoholicFilter: string = this.alcoholicFilter[0];

  constructor(private cocktailService:CocktailService, private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.getCocktailsBySearchValue();
    // Fill categories with the service information
    this.cocktailService.getCocktailCategories()
    .subscribe( categories => {
      categories.drinks.map( category => {
        this.categoriesFilter.push(category.strCategory);
      });
    });
  }

  getCocktailsBySearchValue(){
    this.cocktailService.getCocktailsByName(this.searchValue)
    .subscribe(cocktails => {
      this.cocktails = cocktails ? cocktails.drinks : [];
    });
  }

  onSearchTypeChange(searchType: string){
    this.searchType = searchType;
    this.getCocktailsBySearchValue();
  }

  categoryFilterChange(categoryFilter: string){
    this.searchValue = '';
    this.selectedAlcoholicFilter = this.alcoholicFilter[0];
    this.selectedCategory = categoryFilter;
    // loading on
    if (categoryFilter === 'All'){
      this.getCocktailsBySearchValue();
    } else {
      this.cocktailService.getCocktailsByCategory(this.selectedCategory)
      .subscribe(cocktails => {
        this.cocktails = cocktails ? cocktails.drinks : [];
      });
    }
    // loading off
  }

  alcoholicFilterChange(alcoholicFilter: string){
    this.searchValue = '';
    this.selectedCategory = this.categoriesFilter[0];
    this.selectedAlcoholicFilter = alcoholicFilter;

    // loading on
    if (alcoholicFilter === 'All'){
      this.getCocktailsBySearchValue();
    } else {
      this.cocktailService.getCocktailsByDrinkType(this.selectedAlcoholicFilter)
      .subscribe(cocktails => {
        this.cocktails = cocktails ? cocktails.drinks : [];
      });
    }
    // loading off
  }

  seeFavourites(seeFavourites: boolean){
    if(seeFavourites){
      this.selectedCategory = this.categoriesFilter[0];
      this.searchValue = '';
      this.selectedAlcoholicFilter = this.alcoholicFilter[0];
      // Obtener del localStorage
    } else {
      this.getCocktailsBySearchValue();
    }
  }

  onSearchChange(value: string){
    this.searchValue = value;
    // loading on
    if (this.searchType === 'Name'){
      this.getCocktailsBySearchValue();
    } else {
      this.cocktailService.getIngredientByName(this.searchValue).pipe(
        mergeMap((ingredientResp) => this.cocktailService.getCocktailsByIngredient(ingredientResp.ingredients[0].strIngredient)),
      ).subscribe((cocktails) => {
        this.cocktails = cocktails ? cocktails.drinks : [];
      });
    }
    // loading off
  } 
    
}
