import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSuggestionsComponent } from './ingredients-suggestions.component';

describe('IngredientsSuggestionsComponent', () => {
  let component: IngredientsSuggestionsComponent;
  let fixture: ComponentFixture<IngredientsSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
