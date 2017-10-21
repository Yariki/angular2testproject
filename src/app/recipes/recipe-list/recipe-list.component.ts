import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('1 test Recipe', 'This is a test 1', 'http://del.h-cdn.co/assets/15/30/980x980/gallery-1437594449-vscocam-photo-1-1.jpg'),
    new Recipe('2 test Recipe', 'This is a test 2', 'http://del.h-cdn.co/assets/15/30/980x980/gallery-1437594449-vscocam-photo-1-1.jpg'),
    new Recipe('3 test Recipe', 'This is a test 3', 'http://del.h-cdn.co/assets/15/30/980x980/gallery-1437594449-vscocam-photo-1-1.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(item: Recipe) {
    this.recipeWasSelected.emit(item);
  }

}
