import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDietaryComponent } from './today-dietary.component';

describe('TodayDietaryComponent', () => {
  let component: TodayDietaryComponent;
  let fixture: ComponentFixture<TodayDietaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDietaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayDietaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
