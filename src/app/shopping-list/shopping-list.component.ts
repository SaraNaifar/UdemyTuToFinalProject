import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: ingredient [] =[
      new ingredient('Tomatos', 4),
      new ingredient('Bananas', 12),
      new ingredient('Pepper', 3)
    ];
  constructor() { }

  ngOnInit() {
  }

}
