import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleButtonsComponent } from './article-buttons.component';

describe('ArticleButtonsComponent', () => {
  let component: ArticleButtonsComponent;
  let fixture: ComponentFixture<ArticleButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
