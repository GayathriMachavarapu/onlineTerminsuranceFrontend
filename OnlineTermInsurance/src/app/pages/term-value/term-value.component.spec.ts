import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermValueComponent } from './term-value.component';

describe('TermValueComponent', () => {
  let component: TermValueComponent;
  let fixture: ComponentFixture<TermValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermValueComponent]
    });
    fixture = TestBed.createComponent(TermValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
