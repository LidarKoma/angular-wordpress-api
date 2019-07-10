import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdetailComponent } from './workdetail.component';

describe('WorkdetailComponent', () => {
  let component: WorkdetailComponent;
  let fixture: ComponentFixture<WorkdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
