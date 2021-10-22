import { DataResultsType } from '../../types'
import {Item} from '../Item/Item'

type ContainerProps = {
    dataItems: DataResultsType[]
}

export const ItemsContainer = (props:ContainerProps) => {
    return (
        <ul className="w-100 gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">{props.dataItems.map((item:DataResultsType) => <Item key={item.id} item={item} />)}</ul>
    )
}