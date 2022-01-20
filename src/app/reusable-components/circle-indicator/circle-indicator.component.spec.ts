import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIndicatorComponent } from './circle-indicator.component';

describe('CircleIndicatorComponent', () => {
  let component: CircleIndicatorComponent;
  let fixture: ComponentFixture<CircleIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
