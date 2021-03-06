import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {Recipe} from "./recipe";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'rb-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
