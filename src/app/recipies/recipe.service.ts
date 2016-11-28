import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] =[
    new Recipe("Recipe 1", "Recipe 001", "http://eatlittlebird.com/wp-content/uploads/2012/07/lemon-syrup-loaf-cake-ingredients.jpg", [
      new Ingredient("French Fries", 2),
      new Ingredient("Meat", 1)
    ]),
    new Recipe("Recipe 2", "Recipe 002", "http://www.simplyscratch.com/wp-content/uploads/2014/04/Baked-Buttermilk-Cake-Doughnuts-+-Fresh-Strawberry-Glaze-l-www.SimplyScratch.com-ingredients-.jpg", [ ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
