import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodrigohomePage } from './rodrigohome.page';

describe('RodrigohomePage', () => {
  let component: RodrigohomePage;
  let fixture: ComponentFixture<RodrigohomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodrigohomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodrigohomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
