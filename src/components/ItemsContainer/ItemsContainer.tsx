import {Item} from '../Item/Item'

type ContainerProps = {
    dataItems: any
}

export const ItemsContainer = (props:ContainerProps) => {
    console.log(props.dataItems)
    return (
        <ul className="w-100 gap-x-6 gap-y-12 grid grid-cols-1 md:grid-cols-3">{props.dataItems.map((item:any) => <Item key={item.id} item={item} />)}</ul>
    )
}