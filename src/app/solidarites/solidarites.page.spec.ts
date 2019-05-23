import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidaritesPage } from './solidarites.page';

describe('SolidaritesPage', () => {
  let component: SolidaritesPage;
  let fixture: ComponentFixture<SolidaritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidaritesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidaritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
