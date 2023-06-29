import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCharacterComponent } from './circle-character.component';

describe('CircleCharacterComponent', () => {
  let component: CircleCharacterComponent;
  let fixture: ComponentFixture<CircleCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCharacterComponent]
    });
    fixture = TestBed.createComponent(CircleCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
