import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbycComponent } from './postbyc.component';

describe('PostbycComponent', () => {
  let component: PostbycComponent;
  let fixture: ComponentFixture<PostbycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
