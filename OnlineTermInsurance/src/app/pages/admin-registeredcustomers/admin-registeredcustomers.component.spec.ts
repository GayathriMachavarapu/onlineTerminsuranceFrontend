import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisteredcustomersComponent } from './admin-registeredcustomers.component';

describe('AdminRegisteredcustomersComponent', () => {
  let component: AdminRegisteredcustomersComponent;
  let fixture: ComponentFixture<AdminRegisteredcustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisteredcustomersComponent]
    });
    fixture = TestBed.createComponent(AdminRegisteredcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
