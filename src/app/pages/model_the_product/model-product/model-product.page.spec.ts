import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelProductPage } from './model-product.page';

describe('ModelProductPage', () => {
  let component: ModelProductPage;
  let fixture: ComponentFixture<ModelProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
