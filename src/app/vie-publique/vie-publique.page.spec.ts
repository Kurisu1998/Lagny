import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViePubliquePage } from './vie-publique.page';

describe('ViePubliquePage', () => {
  let component: ViePubliquePage;
  let fixture: ComponentFixture<ViePubliquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViePubliquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViePubliquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
