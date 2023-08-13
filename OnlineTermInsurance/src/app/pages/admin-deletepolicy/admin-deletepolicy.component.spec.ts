import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletepolicyComponent } from './admin-deletepolicy.component';

describe('AdminDeletepolicyComponent', () => {
  let component: AdminDeletepolicyComponent;
  let fixture: ComponentFixture<AdminDeletepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeletepolicyComponent]
    });
    fixture = TestBed.createComponent(AdminDeletepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
