import {Routes} from "@angular/router";
// import {provideRouter} from "@angular/router";
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: "/recipes", pathMatch: "full" },
  {path: "recipes", component: RecipiesComponent},
  {path: "shopping-list", component: ShoppingListComponent},
];