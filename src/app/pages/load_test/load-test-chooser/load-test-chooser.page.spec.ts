import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadTestChooserPage } from './load-test-chooser.page';

describe('LoadTestChooserPage', () => {
  let component: LoadTestChooserPage;
  let fixture: ComponentFixture<LoadTestChooserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTestChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
