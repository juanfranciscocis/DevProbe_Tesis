import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlameGraphDatePage } from './flame-graph-date.page';

describe('FlameGraphDatePage', () => {
  let component: FlameGraphDatePage;
  let fixture: ComponentFixture<FlameGraphDatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameGraphDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
