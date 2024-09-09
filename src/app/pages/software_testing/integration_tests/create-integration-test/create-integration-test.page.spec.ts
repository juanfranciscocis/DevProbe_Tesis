import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateIntegrationTestPage } from './create-integration-test.page';

describe('CreateIntegrationTestPage', () => {
  let component: CreateIntegrationTestPage;
  let fixture: ComponentFixture<CreateIntegrationTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIntegrationTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
