import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseStepPage } from './choose-step.page';

describe('ChooseStepPage', () => {
  let component: ChooseStepPage;
  let fixture: ComponentFixture<ChooseStepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
