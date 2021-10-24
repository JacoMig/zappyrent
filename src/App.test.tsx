import App, {filterItems} from './App';
import { DataResultsType, IApiResponse, Objects } from './types';
import axios from 'axios'
import {fetchApi, swapiGetter} from '../src/api'
import ItemsContainer from './App'
import { act, render, screen } from '@testing-library/react';
import React from 'react';

describe('fisrt test block', () => {
  jest.mock('./api');
 /*  const setLoaded = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((loaded:boolean) => [loaded=false, setLoaded]); */
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('swapi getter', async () => {
    render(<App/>)
    // let result:IApiResponse<DataResultsType[]>
    await act( async() => {
      const result = await fetchApi('https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties').then(res => {
        expect(res.data.length).toEqual(12)
        expect(screen.getByTestId('ItemsContainer')).toBeInTheDocument()
      })
    })
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
