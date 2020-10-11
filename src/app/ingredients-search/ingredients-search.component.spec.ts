import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSearchComponent } from './ingredients-search.component';

describe('IngredientsChooserComponent', () => {
  let component: IngredientsSearchComponent;
  let fixture: ComponentFixture<IngredientsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
