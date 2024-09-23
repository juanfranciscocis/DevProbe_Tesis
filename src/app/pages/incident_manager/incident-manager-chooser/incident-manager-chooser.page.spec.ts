import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentManagerChooserPage } from './incident-manager-chooser.page';

describe('IncidentManagerChooserPage', () => {
  let component: IncidentManagerChooserPage;
  let fixture: ComponentFixture<IncidentManagerChooserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentManagerChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
