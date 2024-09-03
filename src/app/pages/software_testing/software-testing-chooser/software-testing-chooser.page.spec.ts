import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwareTestingChooserPage } from './software-testing-chooser.page';

describe('SoftwareTestingChooserPage', () => {
  let component: SoftwareTestingChooserPage;
  let fixture: ComponentFixture<SoftwareTestingChooserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTestingChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
