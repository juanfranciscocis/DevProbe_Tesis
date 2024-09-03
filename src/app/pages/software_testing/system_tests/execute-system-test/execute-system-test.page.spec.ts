import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExecuteSystemTestPage } from './execute-system-test.page';

describe('ExecuteSystemTestPage', () => {
  let component: ExecuteSystemTestPage;
  let fixture: ComponentFixture<ExecuteSystemTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteSystemTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
