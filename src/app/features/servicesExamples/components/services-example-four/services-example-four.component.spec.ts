import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleFourComponent } from './services-example-four.component';

describe('ServicesExampleFourComponent', () => {
  let component: ServicesExampleFourComponent;
  let fixture: ComponentFixture<ServicesExampleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
