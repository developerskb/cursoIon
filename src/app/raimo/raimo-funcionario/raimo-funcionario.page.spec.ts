import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaimoFuncionarioPage } from './raimo-funcionario.page';

describe('RaimoFuncionarioPage', () => {
  let component: RaimoFuncionarioPage;
  let fixture: ComponentFixture<RaimoFuncionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaimoFuncionarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaimoFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
