
import { mockNYTResponse } from '../mock_NYTResponse';
import { SearchPipe } from './search.pipe';



describe('Pipe: Searche', () => {
  let pipe: SearchPipe = new SearchPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same list when there is no search string provided', () => {
    expect(pipe.transform(mockNYTResponse,'')).toBe(mockNYTResponse);

  })
   it('should return a list whenever the user type something', () => {
     expect(pipe.transform(mockNYTResponse, 'Portraits').length).toEqual(1);
     expect(pipe.transform(mockNYTResponse, 'wh').length).toEqual(0);
     expect(pipe.transform(mockNYTResponse, 'for').length).toEqual(1);
   });
});
