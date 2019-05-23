import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideGrenierPage } from './vide-grenier.page';

describe('VideGrenierPage', () => {
  let component: VideGrenierPage;
  let fixture: ComponentFixture<VideGrenierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideGrenierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideGrenierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
