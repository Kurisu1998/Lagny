import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsPage } from './concerts.page';

describe('ConcertsPage', () => {
  let component: ConcertsPage;
  let fixture: ComponentFixture<ConcertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
