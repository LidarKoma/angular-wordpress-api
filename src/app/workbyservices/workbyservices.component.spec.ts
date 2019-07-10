import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbyservicesComponent } from './workbyservices.component';

describe('WorkbyservicesComponent', () => {
  let component: WorkbyservicesComponent;
  let fixture: ComponentFixture<WorkbyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
