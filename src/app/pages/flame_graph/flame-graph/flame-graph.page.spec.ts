import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlameGraphPage } from './flame-graph.page';

describe('FlameGraphPage', () => {
  let component: FlameGraphPage;
  let fixture: ComponentFixture<FlameGraphPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
