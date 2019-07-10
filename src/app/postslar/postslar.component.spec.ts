import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostslarComponent } from './postslar.component';

describe('PostslarComponent', () => {
  let component: PostslarComponent;
  let fixture: ComponentFixture<PostslarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostslarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostslarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
