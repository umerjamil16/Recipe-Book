import {EventEmitter, Component, OnInit, Output } from '@angular/core';
import{Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe("Dummy", "Dumy", "http://www.gimmesomeoven.com/wp-content/uploads/2014/05/Mango-Salsa-11.jpg");

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);

  }

}
