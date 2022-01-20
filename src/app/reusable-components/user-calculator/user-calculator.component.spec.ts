import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCalculatorComponent } from './user-calculator.component';

describe('UserCalculatorComponent', () => {
  let component: UserCalculatorComponent;
  let fixture: ComponentFixture<UserCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
