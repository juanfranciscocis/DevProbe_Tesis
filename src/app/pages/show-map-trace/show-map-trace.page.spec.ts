import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowMapTracePage } from './show-map-trace.page';

describe('ShowMapTracePage', () => {
  let component: ShowMapTracePage;
  let fixture: ComponentFixture<ShowMapTracePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMapTracePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
