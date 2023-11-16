import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculateview2Component } from './calculateview2.component';

describe('Calculateview2Component', () => {
  let component: Calculateview2Component;
  let fixture: ComponentFixture<Calculateview2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calculateview2Component]
    });
    fixture = TestBed.createComponent(Calculateview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
