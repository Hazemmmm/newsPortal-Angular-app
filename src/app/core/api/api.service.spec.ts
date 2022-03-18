

import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { mockNYTResponse } from 'src/app/modules/mock_NYTResponse';
import { ApiService, APIS } from './api.service';

describe('Service: Api', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be defined...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

   it('should retreive data from the API via GET...', inject([ApiService], (service: ApiService) => {
     let dummyData = mockNYTResponse;
     service.getLatestNewsList().subscribe((news) => {
       expect(news.results.length).toBeGreaterThan(1);
       expect(news.results).toBe(dummyData);
         const request = httpMock.expectOne(`${APIS.home}`);
         expect(request.request.method).toBe('GET');
         request.flush(dummyData);
     })
   }));
   it('should not retreive data from the httpMock API via GET...', inject([ApiService], (service: ApiService) => {
      const request = httpMock.expectNone(`${APIS.home}`);
     expect(request).toBeUndefined();
   }));

});
