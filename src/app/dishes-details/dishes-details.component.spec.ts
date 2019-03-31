import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesDetailsComponent } from './dishes-details.component';

describe('DishesDetailsComponent', () => {
  let component: DishesDetailsComponent;
  let fixture: ComponentFixture<DishesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
