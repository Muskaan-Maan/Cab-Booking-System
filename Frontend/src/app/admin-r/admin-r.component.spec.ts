import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRComponent } from './admin-r.component';

describe('AdminRComponent', () => {
  let component: AdminRComponent;
  let fixture: ComponentFixture<AdminRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
