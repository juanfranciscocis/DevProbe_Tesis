import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUnitTestPage } from './create-unit-test.page';

describe('CreateUnitTestPage', () => {
  let component: CreateUnitTestPage;
  let fixture: ComponentFixture<CreateUnitTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
