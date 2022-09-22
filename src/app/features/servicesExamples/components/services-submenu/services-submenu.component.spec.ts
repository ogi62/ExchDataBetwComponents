import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSubmenuComponent } from './services-submenu.component';

describe('ServicesSubmenuComponent', () => {
  let component: ServicesSubmenuComponent;
  let fixture: ComponentFixture<ServicesSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
