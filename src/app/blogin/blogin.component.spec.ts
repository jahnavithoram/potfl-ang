import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginComponent } from './blogin.component';

describe('BloginComponent', () => {
  let component: BloginComponent;
  let fixture: ComponentFixture<BloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
