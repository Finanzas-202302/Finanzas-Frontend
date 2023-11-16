import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculateview3Component } from './calculateview3.component';

describe('Calculateview3Component', () => {
  let component: Calculateview3Component;
  let fixture: ComponentFixture<Calculateview3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calculateview3Component]
    });
    fixture = TestBed.createComponent(Calculateview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
