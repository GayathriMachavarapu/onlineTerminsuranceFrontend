import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliciesComponent } from './admin-policies.component';

describe('AdminPoliciesComponent', () => {
  let component: AdminPoliciesComponent;
  let fixture: ComponentFixture<AdminPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPoliciesComponent]
    });
    fixture = TestBed.createComponent(AdminPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
