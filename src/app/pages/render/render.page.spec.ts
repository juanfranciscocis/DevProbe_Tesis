import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenderPage } from './render.page';

describe('RenderPage', () => {
  let component: RenderPage;
  let fixture: ComponentFixture<RenderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
