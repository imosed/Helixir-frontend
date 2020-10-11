import {Component, Input, OnInit} from '@angular/core';
import Fetch from '../../lib/fetch';
import {SelectionModel} from '../../lib/types';

@Component({
  selector: 'app-ingredients-search',
  templateUrl: './ingredients-search.component.html',
  styleUrls: ['./ingredients-search.component.css']
})
export class IngredientsSearchComponent implements OnInit {
  ingredient = '';

  constructor() { }

  @Input()
  choices: SelectionModel;

  ngOnInit(): void {
  }

  async getIngredients(): Promise<void> {
    this.choices.suggestions = await Fetch.get(`/api/ingredients/list/${this.ingredient}`);
  }

  selectSuggestion(sugg: string): void {
    this.ingredient = sugg;
  }

}

