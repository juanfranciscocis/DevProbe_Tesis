import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenderRestartPage } from './render-restart.page';

describe('RenderRestartPage', () => {
  let component: RenderRestartPage;
  let fixture: ComponentFixture<RenderRestartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderRestartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
