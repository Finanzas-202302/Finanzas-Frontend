import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateviewComponent } from './calculateview.component';

describe('CalculateviewComponent', () => {
  let component: CalculateviewComponent;
  let fixture: ComponentFixture<CalculateviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateviewComponent]
    });
    fixture = TestBed.createComponent(CalculateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
