import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlameGraphForPage } from './flame-graph-for.page';

describe('FlameGraphForPage', () => {
  let component: FlameGraphForPage;
  let fixture: ComponentFixture<FlameGraphForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameGraphForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
