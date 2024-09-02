import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSystemTestPage } from './create-system-test.page';

describe('CreateSystemTestPage', () => {
  let component: CreateSystemTestPage;
  let fixture: ComponentFixture<CreateSystemTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSystemTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
