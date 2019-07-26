import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobsonHomePage } from './robson-home.page';

describe('RobsonHomePage', () => {
  let component: RobsonHomePage;
  let fixture: ComponentFixture<RobsonHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobsonHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobsonHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
