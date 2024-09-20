import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadTestHistoryPage } from './load-test-history.page';

describe('LoadTestHistoryPage', () => {
  let component: LoadTestHistoryPage;
  let fixture: ComponentFixture<LoadTestHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTestHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
