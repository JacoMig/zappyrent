import { mocked } from 'ts-jest/utils';
import { getPerson } from './api';

// jest.mock('./api');  // SoundPlayer is now a mock constructor
/* jest.mock('window.fetch', () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
}); */

describe('getPeople test', () => {
  test('getPeople should fetch a person', async () => {
    const mockSuccessResponse = [{id:0},{id: 1}];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    var globalRef:any =global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    console.log((await mockFetchPromise).json())
    // provide a mock implementation for the mocked fetch:
    /* mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve([{name: 'Luke Vader'}]);
        }
      });
    }); */

   
    /* const person = await getPerson(1);
    expect(mocked(fetch).mock.calls.length).toBe(1);
    expect(person).toBeDefined();
    expect(person.name).toBe('Luke Vader'); */
  });
});