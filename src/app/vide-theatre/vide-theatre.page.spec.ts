import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideTheatrePage } from './vide-theatre.page';

describe('VideTheatrePage', () => {
  let component: VideTheatrePage;
  let fixture: ComponentFixture<VideTheatrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideTheatrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideTheatrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
