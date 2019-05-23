import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrocantesPage } from './brocantes.page';

describe('BrocantesPage', () => {
  let component: BrocantesPage;
  let fixture: ComponentFixture<BrocantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrocantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrocantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
