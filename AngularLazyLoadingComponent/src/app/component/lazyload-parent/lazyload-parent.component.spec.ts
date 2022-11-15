import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadParentComponent } from './lazyload-parent.component';

describe('LazyloadParentComponent', () => {
  let component: LazyloadParentComponent;
  let fixture: ComponentFixture<LazyloadParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
