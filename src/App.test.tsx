import App, {filterItems} from './App';
import { DataResultsType, IApiResponse, Objects } from './types';
import axios from 'axios'
import {fetchApi, swapiGetter} from '../src/api'
import ItemsContainer from './App'
import { act, render, screen } from '@testing-library/react';

describe('fisrt test block', () => {
  jest.mock('../src/api');
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('swapi getter', async () => {
    await act( async() => {
      render(<App/>)
      const result = await fetchApi('https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties');
      expect(result.data.length).toEqual(12)
    })
    expect(screen.getByTestId('ItemsContainer')).toBeInTheDocument()
  })



})

/* 
import mockAxios from 'axios'
jest.mock('axios)
mockAxios.get.mockImplementation(() => Promise.resolve({data: {name: "Mock Jedi"}}))

it("test description", () => {
  const result = await swapiGetter(1)
  expect(result).toBe("Mock Jedi")
})
*/
