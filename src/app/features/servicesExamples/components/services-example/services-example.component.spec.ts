import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleComponent } from './services-example.component';

describe('ServicesExampleComponent', () => {
  let component: ServicesExampleComponent;
  let fixture: ComponentFixture<ServicesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
