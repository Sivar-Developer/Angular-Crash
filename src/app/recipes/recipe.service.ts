import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg',
        [
          new Ingredient('meat', 1),
          new Ingredient('French Fries', 20)
        ]
    ),
    new Recipe('A New Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
