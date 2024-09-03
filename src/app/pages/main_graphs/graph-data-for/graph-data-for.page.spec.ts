import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphDataForPage } from './graph-data-for.page';

describe('GraphDataForPage', () => {
  let component: GraphDataForPage;
  let fixture: ComponentFixture<GraphDataForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDataForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
