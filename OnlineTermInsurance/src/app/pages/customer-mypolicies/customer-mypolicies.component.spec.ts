import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMypoliciesComponent } from './customer-mypolicies.component';

describe('CustomerMypoliciesComponent', () => {
  let component: CustomerMypoliciesComponent;
  let fixture: ComponentFixture<CustomerMypoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMypoliciesComponent]
    });
    fixture = TestBed.createComponent(CustomerMypoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
