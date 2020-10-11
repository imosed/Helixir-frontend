import {Component, Input, OnInit} from '@angular/core';
import {SelectionModel} from '../../lib/types';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ingredients-selected',
  templateUrl: './ingredients-selected.component.html',
  styleUrls: ['./ingredients-selected.component.css']
})
export class IngredientsSelectedComponent implements OnInit {
  drinkName: string;

  constructor(private http: HttpClient) { }

  @Input()
  choices: SelectionModel;

  ngOnInit(): void {
  }

  clearSelections(): void {
    this.choices.selected = [];
  }

  submitDrink(): void {
    this.http.post('/api/drinks/add', {name: this.drinkName, instructions: 'Mix the drink.', volumes: this.choices.selected});
  }
}
