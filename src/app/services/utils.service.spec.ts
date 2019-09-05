import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  it('campo esta vazio', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    let param: string = '';
    let result = service.campoVazio(param);
    expect(true).toEqual(result);
  })
});
