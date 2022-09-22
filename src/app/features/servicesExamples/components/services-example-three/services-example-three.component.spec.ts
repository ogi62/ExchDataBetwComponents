import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleThreeComponent } from './services-example-three.component';

describe('ServicesExampleThreeComponent', () => {
  let component: ServicesExampleThreeComponent;
  let fixture: ComponentFixture<ServicesExampleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
