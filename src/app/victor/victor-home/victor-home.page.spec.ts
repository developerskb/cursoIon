import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorHomePage } from './victor-home.page';

describe('VictorHomePage', () => {
  let component: VictorHomePage;
  let fixture: ComponentFixture<VictorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictorHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
