import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent } from "./shopping-list-add.component";
import {Ingredient} from "../shared/ingredient"
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  item: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
