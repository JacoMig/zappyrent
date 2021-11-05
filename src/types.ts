export type Objects = Array<DropdownItemType>

export type DropdownItemType = {
  key: string
  label: string
  checked: boolean
}

export type ArrayElement = {
  [key: string]: string
}

export type DataResultsType = {
  [key: string]: string | number | ArrayElement[] | boolean
}

export interface IApiResponse<T> {
  status: number
  errorMsg: string
  data: T
}
