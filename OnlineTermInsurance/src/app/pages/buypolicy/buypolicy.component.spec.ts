import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypolicyComponent } from './buypolicy.component';

describe('BuypolicyComponent', () => {
  let component: BuypolicyComponent;
  let fixture: ComponentFixture<BuypolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuypolicyComponent]
    });
    fixture = TestBed.createComponent(BuypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
