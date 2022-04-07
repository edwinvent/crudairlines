import { TestBed } from '@angular/core/testing';

import { ModalFocusService } from './modal-focus.service';

describe('ModalFocusService', () => {
  let service: ModalFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
