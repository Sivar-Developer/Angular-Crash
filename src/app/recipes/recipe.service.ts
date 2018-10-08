import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg'),
    new Recipe('A New Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
