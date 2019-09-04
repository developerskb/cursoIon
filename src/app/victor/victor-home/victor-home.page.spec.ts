import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorHomePage } from './victor-home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { TituloPipe } from 'src/app/pipes/titulo.pipe';

describe('VictorHomePage', () => {
  let component: VictorHomePage;
  let fixture: ComponentFixture<VictorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ VictorHomePage, TituloPipe ],
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
