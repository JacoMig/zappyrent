import React, { useEffect, useState } from 'react';
import { fetchApi } from './api';
import './App.css';
import { AvailableCheck } from './components/AvailableCheck/AvailableCheck';
import { ItemsContainer } from './components/ItemsContainer/ItemsContainer';
import {TypeSelector} from "./components/TypeSelector/TypeSelector"
import {Objects} from './types'

const typesObjects:Objects = [
  {
      key: 'private',
      label: 'Private Room',
      checked: false
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

const filterItems = (availability: boolean | undefined, resultData:any[], types:Objects) => {
  const array:Array<any> = []
  let outputData:Array<any> = []
 
  if(!types.some(type => type.checked)){
    outputData = resultData
  }else {
    types.forEach(type => {
      if(type.checked){
        resultData.map(item => {
          if(item.type === type.label){
            array.push(item)
          }
          return null
        })
        outputData = array
      }
    })
  }

  if(availability)
  return outputData.filter(item => item.available)
  else
  return outputData
}



function App() {
  const [types, setTypes] = useState<Objects>(typesObjects);
  const [dataItems, setDataItems] = useState<Array<any>>([]);
  const [resultData, setResultData] = useState<Array<any>>([]);
  const [availability, setAvailability] = useState<boolean | undefined>(false);
  const [loaded, setLoaded] = useState(false);
  
  useEffect( () => {
    if(loaded){
      setDataItems(filterItems(availability, resultData, types))
    } 
  }, [types, resultData, loaded, availability])

  useEffect(() => {
    fetchApi("https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties").then((result:any) => {setResultData(result.data); setDataItems(result.data); setLoaded(true)})
  }, [])

  return (
    <div className="App mx-auto text-zappygrey mb-32">
      <header className="App-header pt-14">
        <div className="logo w-28 h-5">
          <img src="zappyrentlogo.png" alt="logo" />
        </div>
        <div className="inline-flex items-center mt-14 pl-12">
          <TypeSelector types={types} setTypes={setTypes}></TypeSelector>
          <AvailableCheck setAvailability={setAvailability} />
        </div>
      </header>
      {loaded ?
        <>
          <div className="mt-20 mb-12 font-medium text-zappyblack">
            {dataItems.length > 0 ? <p>{dataItems.length} alloggi trovati</p> : <p>nessun alloggio trovato</p>} 
          </div>
          {dataItems.length > 0 ? <ItemsContainer dataItems={dataItems} /> : null}
        </>
        : null}
      
    </div>
  );
}

export default App;
