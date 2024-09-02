import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareTestingPage } from './software-testing.page';

describe('SoftwareTestingPage', () => {
  let component: SoftwareTestingPage;
  let fixture: ComponentFixture<SoftwareTestingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
