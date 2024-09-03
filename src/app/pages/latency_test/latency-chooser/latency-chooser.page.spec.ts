import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatencyChooserPage } from './latency-chooser.page';

describe('LatencyChooserPage', () => {
  let component: LatencyChooserPage;
  let fixture: ComponentFixture<LatencyChooserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatencyChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
