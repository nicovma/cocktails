export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: string;
}

export interface CocktailAPIResponse {
  drinks: Cocktail[];
}

export interface IngredientAPIResponse {
  ingredients: Ingredient[];
}

export interface CocktailCategory{
  strCategory: string;
}

export interface CocktailCategoriesAPIResponse {
  drinks: CocktailCategory[];
}