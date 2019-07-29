import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarceloHomePage } from './marcelo-home.page';

describe('MarceloHomePage', () => {
  let component: MarceloHomePage;
  let fixture: ComponentFixture<MarceloHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarceloHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarceloHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
