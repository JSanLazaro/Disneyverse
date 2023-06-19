import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartComponent } from './heart.component';

describe('HeartComponent', () => {
  let component: HeartComponent;
  let fixture: ComponentFixture<HeartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartComponent]
    });
    fixture = TestBed.createComponent(HeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
