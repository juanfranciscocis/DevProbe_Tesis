import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraceChooserPage } from './trace-chooser.page';

describe('TraceChooserPage', () => {
  let component: TraceChooserPage;
  let fixture: ComponentFixture<TraceChooserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
