import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaimoHomePage } from './raimo-home.page';

describe('RaimoHomePage', () => {
  let component: RaimoHomePage;
  let fixture: ComponentFixture<RaimoHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaimoHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaimoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
