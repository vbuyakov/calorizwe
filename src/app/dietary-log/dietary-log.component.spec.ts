import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryLogComponent } from './dietary-log.component';

describe('DietaryLogComponent', () => {
  let component: DietaryLogComponent;
  let fixture: ComponentFixture<DietaryLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaryLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
