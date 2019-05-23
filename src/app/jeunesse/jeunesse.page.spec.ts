import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeunessePage } from './jeunesse.page';

describe('JeunessePage', () => {
  let component: JeunessePage;
  let fixture: ComponentFixture<JeunessePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeunessePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeunessePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
