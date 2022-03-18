/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InteractService } from './interact.service';

describe('Service: Interact', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractService]
    });
  });

  it('should be a an interact service for holding behaviorSubjects', inject([InteractService], (service: InteractService) => {
    expect(service).toBeTruthy();
  }));

   it('should have all the behaviorSubject be defined...', inject([InteractService], (service: InteractService) => {
     expect(service.$articleData).toBeDefined();
     expect(service.$category).toBeDefined();
     expect(service.$cateogires).toBeDefined();
     expect(service.$searchValue).toBeDefined();
     expect(service.$isLoading).toBeDefined();

   }));   it('should have all the behaviorSubject with initial values...', inject(
     [InteractService],
     (service: InteractService) => {
      service.$articleData.subscribe((res)=> expect(res).toEqual([]))
      service.$category.subscribe((res)=> expect(res).toEqual(''))
      service.$cateogires.subscribe((res)=> expect(res).toEqual(['']))
      service.$isLoading.subscribe((res) => expect(res).toEqual(true));
      service.$searchValue.subscribe((res)=> expect(res).toEqual(''))
     }
   ));

});
