import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthExampleComponent } from './fourth-example.component';

describe('FourthExampleComponent', () => {
  let component: FourthExampleComponent;
  let fixture: ComponentFixture<FourthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
