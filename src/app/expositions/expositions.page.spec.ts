import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositionsPage } from './expositions.page';

describe('ExpositionsPage', () => {
  let component: ExpositionsPage;
  let fixture: ComponentFixture<ExpositionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
