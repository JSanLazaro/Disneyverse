import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardComponent } from './maincard.component';

describe('MaincardComponent', () => {
  let component: MaincardComponent;
  let fixture: ComponentFixture<MaincardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincardComponent]
    });
    fixture = TestBed.createComponent(MaincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
