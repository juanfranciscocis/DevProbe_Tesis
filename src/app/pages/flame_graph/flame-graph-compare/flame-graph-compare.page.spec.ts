import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlameGraphComparePage } from './flame-graph-compare.page';

describe('FlameGraphComparePage', () => {
  let component: FlameGraphComparePage;
  let fixture: ComponentFixture<FlameGraphComparePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameGraphComparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
