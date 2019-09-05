import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaimoFuncionarioPage } from './raimo-funcionario.page';
import { CpfRaimoPipe } from 'src/app/pipes/cpf-raimo.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('RaimoFuncionarioPage', () => {
  let component: RaimoFuncionarioPage;
  let fixture: ComponentFixture<RaimoFuncionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RaimoFuncionarioPage, CpfRaimoPipe ],
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
