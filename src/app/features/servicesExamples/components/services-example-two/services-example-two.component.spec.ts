import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleTwoComponent } from './services-example-two.component';

describe('ServicesExampleTwoComponent', () => {
  let component: ServicesExampleTwoComponent;
  let fixture: ComponentFixture<ServicesExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
