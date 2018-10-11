import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );

    const myObservable = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);

      setTimeout(() => {
        observer.next('third package');
      }, 6000);

    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.recipeService.recipeSelected.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
