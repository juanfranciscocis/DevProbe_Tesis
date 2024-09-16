import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadTestPage } from './load-test.page';

describe('LoadTestPage', () => {
  let component: LoadTestPage;
  let fixture: ComponentFixture<LoadTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
