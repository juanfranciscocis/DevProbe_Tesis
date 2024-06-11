import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatencyResultsPage } from './latency-results.page';

describe('LatencyResultsPage', () => {
  let component: LatencyResultsPage;
  let fixture: ComponentFixture<LatencyResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatencyResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
