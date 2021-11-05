import { ResultDataObject } from '../../api'
import { Item } from '../Item/Item'

type ContainerProps = {
  dataItems: ResultDataObject[]
}

export const ItemsContainer = (props: ContainerProps) => {
  return (
    <ul className="w-100 gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {props.dataItems.map((item: ResultDataObject) => (
        <Item key={item.id as number} item={item} />
      ))}
    </ul>
  )
}
