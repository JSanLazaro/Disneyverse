import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteratingComponent } from './favoriterating.component';

describe('FavoriteratingComponent', () => {
  let component: FavoriteratingComponent;
  let fixture: ComponentFixture<FavoriteratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteratingComponent]
    });
    fixture = TestBed.createComponent(FavoriteratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
