import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatepolicyComponent } from './admin-createpolicy.component';

describe('AdminCreatepolicyComponent', () => {
  let component: AdminCreatepolicyComponent;
  let fixture: ComponentFixture<AdminCreatepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreatepolicyComponent]
    });
    fixture = TestBed.createComponent(AdminCreatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
