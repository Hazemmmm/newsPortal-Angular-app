/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { mockNYTResponse } from '../mock_NYTResponse';
import { FilterPipe } from './filter.pipe';


fdescribe('Pipe: Filtere', () => {

  it('create an instance', () => {
    let pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return a filtered array', () => {
    let pipe = new FilterPipe();
    expect(pipe.transform(mockNYTResponse, 'magazine')).toEqual(
      mockNYTResponse.filter((x) => x.section === 'magazine')
    );
    expect(pipe.transform(mockNYTResponse, 'magazine')).toBeTruthy();
  })

  it('Should return a whole List ', () => {
    let pipe = new FilterPipe();
expect(pipe.transform(mockNYTResponse, '')).toEqual(mockNYTResponse);
  })
});
