import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobsonHomePage } from './robson-home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { CpfRobsonPipe } from 'src/app/pipes/cpf-robson.pipe';

describe('RobsonHomePage', () => {
  let component: RobsonHomePage;
  let fixture: ComponentFixture<RobsonHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ RobsonHomePage, CpfRobsonPipe ],
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
