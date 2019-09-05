import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarceloFuncionarioPage } from './marcelo-funcionario.page';
import { TelefoneMarceloPipe } from 'src/app/pipes/pipesMarcelo/telefone-marcelo.pipe';

describe('MarceloFuncionarioPage', () => {
  let component: MarceloFuncionarioPage;
  let fixture: ComponentFixture<MarceloFuncionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarceloFuncionarioPage, TelefoneMarceloPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarceloFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
