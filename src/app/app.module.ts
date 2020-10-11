import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import {FormsModule} from '@angular/forms';
import { IngredientsSuggestionsComponent } from './ingredients-suggestions/ingredients-suggestions.component';
import { IngredientsSelectedComponent } from './ingredients-selected/ingredients-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsSearchComponent,
    IngredientsSuggestionsComponent,
    IngredientsSelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
