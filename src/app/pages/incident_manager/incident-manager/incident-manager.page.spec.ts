import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentManagerPage } from './incident-manager.page';

describe('IncidentManagerPage', () => {
  let component: IncidentManagerPage;
  let fixture: ComponentFixture<IncidentManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
