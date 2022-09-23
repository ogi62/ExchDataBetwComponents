import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkViewChildComponent } from './link-view-child.component';

describe('LinkViewChildComponent', () => {
  let component: LinkViewChildComponent;
  let fixture: ComponentFixture<LinkViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
