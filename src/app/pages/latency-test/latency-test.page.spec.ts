import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatencyTestPage } from './latency-test.page';

describe('LatencyTestPage', () => {
  let component: LatencyTestPage;
  let fixture: ComponentFixture<LatencyTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatencyTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
