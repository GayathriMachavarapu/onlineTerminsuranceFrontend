import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatepolicyComponent } from './admin-updatepolicy.component';

describe('AdminUpdatepolicyComponent', () => {
  let component: AdminUpdatepolicyComponent;
  let fixture: ComponentFixture<AdminUpdatepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdatepolicyComponent]
    });
    fixture = TestBed.createComponent(AdminUpdatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
