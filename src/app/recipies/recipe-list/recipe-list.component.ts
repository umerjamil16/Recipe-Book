import {EventEmitter, Component, OnInit, Output } from '@angular/core';
import{Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe("Recipe 1", "Recipe 001", "http://eatlittlebird.com/wp-content/uploads/2012/07/lemon-syrup-loaf-cake-ingredients.jpg", []),
    new Recipe("Recipe 2", "Recipe 002", "http://www.simplyscratch.com/wp-content/uploads/2014/04/Baked-Buttermilk-Cake-Doughnuts-+-Fresh-Strawberry-Glaze-l-www.SimplyScratch.com-ingredients-.jpg", [ ])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

//  recipe = new Recipe("Dummy", "Dumy", "http://www.gimmesomeoven.com/wp-content/uploads/2014/05/Mango-Salsa-11.jpg");

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);

  }

}
