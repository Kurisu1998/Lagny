import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlacePage } from './detail-place.page';

describe('DetailPlacePage', () => {
  let component: DetailPlacePage;
  let fixture: ComponentFixture<DetailPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
