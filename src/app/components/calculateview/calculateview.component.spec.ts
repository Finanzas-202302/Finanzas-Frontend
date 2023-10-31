import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateViewComponent } from './calculateview.component';

describe('CalculateViewComponent', () => {
  let component: CalculateViewComponent;
  let fixture: ComponentFixture<CalculateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateViewComponent],
    });
    fixture = TestBed.createComponent(CalculateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
