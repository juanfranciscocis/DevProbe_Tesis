import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphTracePage } from './graph-trace.page';

describe('GraphTracePage', () => {
  let component: GraphTracePage;
  let fixture: ComponentFixture<GraphTracePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTracePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
