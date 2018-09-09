import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-720x960.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
