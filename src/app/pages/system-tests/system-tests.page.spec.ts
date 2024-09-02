import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemTestsPage } from './system-tests.page';

describe('SystemTestsPage', () => {
  let component: SystemTestsPage;
  let fixture: ComponentFixture<SystemTestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
