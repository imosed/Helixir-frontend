import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSelectedComponent } from './ingredients-selected.component';

describe('IngredientsSelectedComponent', () => {
  let component: IngredientsSelectedComponent;
  let fixture: ComponentFixture<IngredientsSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
