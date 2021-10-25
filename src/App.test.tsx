import {filterItems} from './App';
import { DataResultsType, Objects } from './types';


describe('Unit Test on App filter function', () => {
  
  it('test function filterItems() with types and no availability checked', () => {
    const typesObjects:Objects = [
      {
          key: 'private',
          label: 'Private Room',
          checked: true
      },
      {
          key: 'entire',
          label: 'Entire Property',
          checked: false
      },
      {
          key: 'shared',
          label: 'Shared Room',
          checked: false
      },
      {
          key: 'studio',
          label: 'Studio',
          checked: false
      }
    ]
    const items:Array<DataResultsType> =  [{
      "id": 1,
      "type": "Private Room",
      "available": true
    },
    {
      "id": 2,
      "type": "Entire Property",
      "available": false
    }];
    expect(filterItems(undefined, items, typesObjects )).toEqual([{
      "id": 1,
      "type": "Private Room",
      "available": true
    }])
  })

  it('test function filterItems() with types and availability', () => {
    const typesObjects:Objects = [
      {
          key: 'private',
          label: 'Private Room',
          checked: true
      },
      {
          key: 'entire',
          label: 'Entire Property',
          checked: true
      },
      {
          key: 'shared',
          label: 'Shared Room',
          checked: false
      },
      {
          key: 'studio',
          label: 'Studio',
          checked: false
      }
    ]
    const items:Array<DataResultsType> =  [{
      "id": 1,
      "type": "Private Room",
      "available": true
    },
    {
      "id": 2,
      "type": "Entire Property",
      "available": true
    }];
    expect(filterItems(true, items, typesObjects )).toEqual(items)
  })
})
 
