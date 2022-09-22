import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleOneComponent } from './services-example-one.component';

describe('ServicesExampleOneComponent', () => {
  let component: ServicesExampleOneComponent;
  let fixture: ComponentFixture<ServicesExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
