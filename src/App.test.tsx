import App, {filterItems} from './App';
import { DataResultsType, IApiResponse, Objects } from './types';
import axios from 'axios'
import {fetchApi, getPerson} from './api'
import ItemsContainer from './App'
import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
// import {getPerson as mockedGetPerson} from './api';
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
 


describe('fisrt test block', () => {
 
 /*  const setLoaded = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((loaded:boolean) => [loaded=false, setLoaded]);  */
  /* jest.mock("./api", () => {
    const data = [{id:0}, {id:1}];      
    return {
    getPerson: jest.fn(() => Promise.resolve(data))
  }});  */
  

  it('swapi getter', async () => {
    // const fetchSpy = jest.spyOn(window, 'fetch');
    const data = [{id:0}, {id:1}];  
    const mock = jest.fn((): Promise<any> => {
      return Promise.resolve(data);
    });
   /*  mock.mockImplementation((): Promise<any> => {
      return Promise.resolve({
      json() {
          return Promise.resolve(data);
      }
      });
    });  */

    const {getByTestId} = render(<App getPerson={mock} />)
    // expect(fetchSpy).toBeCalled()
    await waitFor(() =>
      getByTestId('ItemsContainer'),
    ) 
    expect(getByTestId('ItemsContainer')).toBeInTheDocument()   

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
