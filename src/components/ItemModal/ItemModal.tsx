import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ResultDataObject } from '../../api'

type UrlParamsType = {
  id?: string
}

type ItemModalPropsType = {
  items: ResultDataObject[]
}

export const ItemModal = (props: ItemModalPropsType) => {
  const [item, setItem] = useState<ResultDataObject | null>(null)
  const { id } = useParams<UrlParamsType>()

  useEffect(() => {
    if (props.items.length > 0) {
      setItem(() => {
        const current = props.items.filter((this_item) => this_item.id === parseInt(id as string))
        if (current.length > 0) {
          return current[0]
        } else return null
      })
    }
  }, [props.items, id])

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-zappyblack bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        {item ? (
          <div className="inline-block px-4 align-bottom bg-white rounded-2xl text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white relative pt-5 pb-4 sm:pb-4">
              <Link to={'/'} className="absolute top-1 right-0 font-medium text-lg text-zappyblack">
                X
              </Link>
              <h2 className="text-zappyblack text-center text-lg font-bold mb-4 leading-6">
                {item.title}
              </h2>
              <figure className="relative overflow-hidden">
                {item.available ? (
                  <div className="absolute bg-zappybadge z-10 text-xs font-medium top-4 left-4 text-zappyblack px-4 py-2 border-transparent rounded-2xl">
                    Disponibile subito
                  </div>
                ) : null}
                <img className="object-cover h-40 w-full" src={item.image} alt={item.address} />
              </figure>
              <div className="card-body py-6">
                <div className="flex items-center justify-center mx-auto">
                  <div className="pr-6">
                    <span className="text-zappyblack">{item.tenants}</span>{' '}
                    <span className="text-xs">inquilini</span>
                  </div>
                  <div className="pr-6">
                    <span className="text-zappyblack">{item.baths}</span>{' '}
                    <span className="text-xs">bagno</span>
                  </div>
                  <div>
                    <span className="text-zappyblack">{item.beds}</span>{' '}
                    <span className="text-xs">letto</span>
                  </div>
                </div>
                <p className="font-bold text-md text-zappyblack text-center mt-6">{item.address}</p>
                <p className="my-6 text-xs text-center">{item.description}</p>
                <div className="flex items-center justify-center text-lg">
                  <p className="text-zappyblu pr-2">Canone d' affitto</p>
                  <p>
                    <span className="text-zappyblack font-bold">€ {item.price}</span> /mese
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-zappyblu hover:bg-opacity-75 text-white font-medium py-2 px-12 sm:px-24 rounded-full">
                    Prenota alloggio
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
