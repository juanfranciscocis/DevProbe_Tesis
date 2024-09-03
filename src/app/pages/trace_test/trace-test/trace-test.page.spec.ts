import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraceTestPage } from './trace-test.page';

describe('TraceTestPage', () => {
  let component: TraceTestPage;
  let fixture: ComponentFixture<TraceTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
