import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentPostmortemPage } from './incident-postmortem.page';

describe('IncidentPostmortemPage', () => {
  let component: IncidentPostmortemPage;
  let fixture: ComponentFixture<IncidentPostmortemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentPostmortemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
