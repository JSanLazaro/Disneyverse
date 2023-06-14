import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardjoinComponent } from './maincardjoin.component';

describe('MaincardjoinComponent', () => {
  let component: MaincardjoinComponent;
  let fixture: ComponentFixture<MaincardjoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincardjoinComponent]
    });
    fixture = TestBed.createComponent(MaincardjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
