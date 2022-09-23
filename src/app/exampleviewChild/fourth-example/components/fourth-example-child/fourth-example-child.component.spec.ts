import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthExampleChildComponent } from './fourth-example-child.component';

describe('FourthExampleChildComponent', () => {
  let component: FourthExampleChildComponent;
  let fixture: ComponentFixture<FourthExampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthExampleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
