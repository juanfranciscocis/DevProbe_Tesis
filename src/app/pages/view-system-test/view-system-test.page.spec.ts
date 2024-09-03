import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSystemTestPage } from './view-system-test.page';

describe('ViewSystemTestPage', () => {
  let component: ViewSystemTestPage;
  let fixture: ComponentFixture<ViewSystemTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSystemTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
