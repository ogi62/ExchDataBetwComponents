import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleFiveComponent } from './services-example-five.component';

describe('ServicesExampleFiveComponent', () => {
  let component: ServicesExampleFiveComponent;
  let fixture: ComponentFixture<ServicesExampleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
