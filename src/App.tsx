import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchApi, getPerson } from './api';
import './App.css';
import { AvailableCheck } from './components/AvailableCheck/AvailableCheck';
import { ItemModal } from './components/ItemModal/ItemModal';
import { ItemsContainer } from './components/ItemsContainer/ItemsContainer';
import {TypeSelector} from "./components/TypeSelector/TypeSelector"
import {DataResultsType, IApiResponse, Objects} from './types'

export const typesObjects:Objects = [
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

export const filterItems = (availability: boolean | undefined, resultData:Array<DataResultsType>, types:Objects):Array<DataResultsType> => {
  const array:Array<DataResultsType> = []
  let outputData:Array<DataResultsType> = []
 
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


const resultText = (itemsLength:number):string => {
  if(!itemsLength)
    return ''
  let text:string = ''
  switch(itemsLength){
    case 0:
      text = `nessun alloggio trovato`;
    break;
    case 1:
      text = `${itemsLength} alloggio trovato`  ;
    break;
    default: text = `${itemsLength} alloggi trovati`;
  }
  return text
}
type AppPropsType = {
  getPerson: () => Promise<any>
}


function App(props:AppPropsType) {
  const [types, setTypes] = useState<Objects>(typesObjects);
  const [dataItems, setDataItems] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [availability, setAvailability] = useState<boolean | undefined>(false);
  const [loaded, setLoaded] = useState(false);
  
 /*  useEffect( () => {
    if(loaded){
      setDataItems(filterItems(availability, resultData, types))
    } 
  }, [types, resultData, loaded, availability]) */

  useEffect(() => {
    if(resultData.length > 0) setLoaded(true)
  }, [resultData])

  useEffect(() => {
    props.getPerson().then((res) => {setResultData(res); setDataItems(res);console.log(res.length)})
    // fetchApi("https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties").then((result:IApiResponse<DataResultsType[]>) => {setResultData(result.data); setDataItems(result.data); setLoaded(true)})
  }, [])

  return (
    <Router>
      <div className="App mx-auto text-zappygrey mb-32 px-6 lg:px-0">
        <header className="App-header pt-14">
          <div className="logo w-28 h-5">
            <img src="/zappyrentlogo.png" alt="logo" />
          </div>
          <div className="flex sm:justify-start justify-between items-center mt-14 lg:pl-12">
            <TypeSelector types={types} setTypes={setTypes}></TypeSelector>
            <AvailableCheck setAvailability={setAvailability} />
          </div>
        </header>
       
          <>
            <div className="mt-20 mb-12 font-medium text-zappyblack">
              <p>{resultText(dataItems.length)}</p>
            </div>
            {dataItems.length > 0 ? <div className="itemsContainer" data-testid="ItemsContainer"></div> : null}
          </>
      <Switch>
        <Route path="/appartment/:id" children={<ItemModal items={resultData} />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
