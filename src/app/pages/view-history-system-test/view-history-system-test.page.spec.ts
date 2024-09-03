import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewHistorySystemTestPage } from './view-history-system-test.page';

describe('ViewHistorySystemTestPage', () => {
  let component: ViewHistorySystemTestPage;
  let fixture: ComponentFixture<ViewHistorySystemTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistorySystemTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
