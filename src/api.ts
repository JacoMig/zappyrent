import { IApiResponse, DataResultsType, ArrayElement } from './types'

const apiUrl: string =
  'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties'

export class ResultDataObject {
  id: number

  available: boolean

  image: string

  address: string

  title: string

  type: string

  tenants: number

  beds: number

  baths: number

  price: number

  description: string

  constructor(data: DataResultsType) {
    this.id = data.id as number
    this.available = data.available as boolean
    this.image = (data.images as ArrayElement[])[0].url as string
    this.address = `${data.street} ${data.street_number}, ${data.cap} ${data.city}`
    this.title = data.title as string
    this.type = data.type as string
    this.tenants = data.tenants as number
    this.beds = data.beds as number
    this.baths = data.baths as number
    this.price = data.price as number
    this.description = data.description as string
  }
}

export const fetchApi = async (): Promise<IApiResponse<ResultDataObject[]>> => {
  let result: IApiResponse<ResultDataObject[]> = { data: [], errorMsg: '', status: 200 }
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const dataMapper = data.map((item: DataResultsType) => new ResultDataObject(item))
    if (response.status === 200) {
      result = { data: dataMapper, errorMsg: '', status: 200 }
    } else {
      result = { data: [], errorMsg: data.message, status: response.status }
    }
  } catch (e: unknown) {
    result = { data: [], errorMsg: e as string, status: 400 }
    console.log(e)
  }
  return result
}
