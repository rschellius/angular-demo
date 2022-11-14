import { TestBed } from '@angular/core/testing';

import { ComponentAService } from './component-a.service';

describe('ComponentAService', () => {
  let service: ComponentAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
