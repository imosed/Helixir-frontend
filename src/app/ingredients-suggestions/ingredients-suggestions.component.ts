import {Component, Input, OnInit} from '@angular/core';
import {Ingredient, SelectionModel} from '../../lib/types';
import Fetch from '../../lib/fetch';

@Component({
  selector: 'app-ingredients-suggestions',
  templateUrl: './ingredients-suggestions.component.html',
  styleUrls: ['./ingredients-suggestions.component.css']
})
export class IngredientsSuggestionsComponent implements OnInit {

  constructor() {

  }

  @Input()
  choices: SelectionModel;

  async ngOnInit(): Promise<void> {
    this.choices.suggestions = await Fetch.get('/api/ingredients/list');
  }

  selectIngredient(ingredient: Ingredient): void {
    if (this.choices.selected.map(s => s.id).includes(ingredient.id)) {
      this.choices.selected = this.choices.selected.filter(s => s.id !== ingredient.id);
    } else {
      this.choices.selected.push(ingredient);
    }
  }

  isSelected(ing: Ingredient): boolean {
    return this.choices.selected.map((c: Ingredient) => c.id).includes(ing.id);
  }

}
