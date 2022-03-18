

import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('Service: Api', () => {

  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService],
    });

  service = TestBed.inject(ApiService);
  });

  it('should be defined...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

});
