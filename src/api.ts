import { IApiResponse, DataResultsType } from './types'

const apiUrl: string =
  'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties'

export const fetchApi = async (): Promise<IApiResponse<DataResultsType[]>> => {
  let result: IApiResponse<DataResultsType[]> = { data: [], errorMsg: '', status: 200 }
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.status === 200) {
      result = { data: data, errorMsg: '', status: 200 }
    } else {
      result = { data: [], errorMsg: data.message, status: response.status }
    }
  } catch (e: unknown) {
    result = { data: [], errorMsg: e as string, status: 400 }
    console.log(e)
  }
  return result
}
