import { IApiResponse, DataResultsType } from "./types";

export const fetchApi = async (url:string):Promise<IApiResponse<DataResultsType[]>> => {
    let result = {data: {}, errorMsg: '', status: 200}
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.status === 200){
           result = {data: data,  errorMsg: '', status: 200}
        } else {
           result = {data: {}, errorMsg: data.message, status: response.status}
        }
    }
      catch(e:any){
        result = {data: {}, errorMsg: e, status: 400}
        console.log(e)
    }
    return result as IApiResponse<DataResultsType[]>
}