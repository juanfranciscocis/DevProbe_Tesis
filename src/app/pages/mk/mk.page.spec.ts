import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MkPage } from './mk.page';

describe('MkPage', () => {
  let component: MkPage;
  let fixture: ComponentFixture<MkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
