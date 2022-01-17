import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialModelsComponent } from './financial-models.component';

describe('FinancialModelsComponent', () => {
  let component: FinancialModelsComponent;
  let fixture: ComponentFixture<FinancialModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
