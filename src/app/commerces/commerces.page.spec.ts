import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesPage } from './commerces.page';

describe('CommercesPage', () => {
  let component: CommercesPage;
  let fixture: ComponentFixture<CommercesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
