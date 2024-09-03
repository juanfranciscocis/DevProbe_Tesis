import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraceResultsPage } from './trace-results.page';

describe('TraceResultsPage', () => {
  let component: TraceResultsPage;
  let fixture: ComponentFixture<TraceResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
