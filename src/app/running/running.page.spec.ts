import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningPage } from './running.page';

describe('RunningPage', () => {
  let component: RunningPage;
  let fixture: ComponentFixture<RunningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
