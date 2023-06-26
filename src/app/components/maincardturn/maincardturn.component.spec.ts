import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincardturnComponent } from './maincardturn.component';

describe('MaincardturnComponent', () => {
  let component: MaincardturnComponent;
  let fixture: ComponentFixture<MaincardturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincardturnComponent]
    });
    fixture = TestBed.createComponent(MaincardturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
