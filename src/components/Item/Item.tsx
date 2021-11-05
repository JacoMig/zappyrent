import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrayElement, DataResultsType } from '../../types'

const stringCutter = (str: string, maxL: number) => {
  if (str.length > maxL) return `${str.substring(0, maxL)}...`
  else return str
}

type ItemPropsType = {
  item: DataResultsType
}

export const Item = (props: ItemPropsType) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link to={`/appartment/${props.item.id}`}>
      <li className="card bordered shadow-md rounded-2xl overflow-hidden">
        {!imageLoaded ? <img src="placeholder-image.jpg" alt="placeholder" /> : null}
        <figure className="relative">
          {props.item.available ? (
            <div className="absolute bg-zappybadge z-10 text-xs font-medium top-4 left-4 text-zappyblack px-4 py-2 border-transparent rounded-2xl">
              Disponibile subito
            </div>
          ) : null}
          <img
            style={!imageLoaded ? { visibility: 'hidden' } : {}}
            src={(props.item.images as ArrayElement[])[0].url}
            onLoad={() => setImageLoaded(true)}
            alt={props.item.street as string}
          />
        </figure>
        <div className="card-body py-6">
          <div className="badge badge-secondary mb-4 text-xs px-6">{props.item.type}</div>
          <h2 className="text-zappyblack text-lg font-bold mb-4 px-6 h-16 leading-6">
            {stringCutter(props.item.title as string, 50)}
          </h2>
          <div className="flex items-center justify-between mb-4 px-6">
            <div>
              <span className="text-zappyblack">{props.item.tenants}</span>{' '}
              <span className="text-xs">inquilini</span>
            </div>
            <div>
              <span className="text-zappyblack">{props.item.baths}</span>{' '}
              <span className="text-xs">bagno</span>
            </div>
            <div>
              <span className="text-zappyblack">{props.item.beds}</span>{' '}
              <span className="text-xs">letto</span>
            </div>
          </div>
          <p className="mb-4 text-xs h-16 px-6">
            {stringCutter(props.item.description as string, 100)}
          </p>
          <div className="border-t border-gray-300 pt-6">
            <div className="px-6 flex items-center justify-between text-lg font-bold">
              <p className="text-zappyblu">Canone d' affitto</p>
              <p>
                <span className="text-zappyblack">€ {props.item.price}</span> /mese
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
