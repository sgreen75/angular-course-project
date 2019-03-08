import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'http://res.publicdomainfiles.com/pdf_view/2/13494451211528.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
