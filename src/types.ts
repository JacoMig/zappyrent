export type Objects =   Array<DropdownItemType>;

export type DropdownItemType = {
    key: string,
    label: string,
    checked: boolean
}

export type DataResultsType = {
    [key: string]: any;
}

export interface IApiResponse {
    status: number;
    errorMsg: string;
    data: Array<DataResultsType>;
}