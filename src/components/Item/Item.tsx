import { useState } from "react";

const stringCutter = (str: string, maxL: number) => {
    if(str.length > maxL)
    return `${str.substring(0,maxL)}...`
    else return str
}

export const Item = (props:any) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (<li className="card bordered shadow-md rounded-2xl overflow-hidden">
            {!imageLoaded ? <img src='placeholder-image.jpg' alt='placeholder' /> : null}
            <figure className="relative">
                {props.item.available ? <div className="absolute bg-zappybadge z-10 text-xs font-medium top-4 left-4 text-zappyblack px-4 py-2 border-transparent rounded-2xl">Disponibile subito</div> : null}
                <img style={!imageLoaded ? { visibility: 'hidden' } : {}} src={props.item.images[0].url} onLoad={() => setImageLoaded(true)} alt={props.item.street} />
            </figure> 
            <div className="card-body p-6">
                <div className="badge badge-secondary mb-4 text-xs">{props.item.type}</div>
                <h2 className="text-zappyblack text-lg font-bold mb-4 h-16 leading-6">{stringCutter(props.item.title, 50)}</h2> 
                <div className="flex items-center justify-between mb-4">
                    <div><span className="text-zappyblack">{props.item.tenants}</span> <span className="text-xs">inquilini</span></div>
                    <div><span className="text-zappyblack">{props.item.baths}</span> <span className="text-xs">bagno</span></div>
                    <div><span className="text-zappyblack">{props.item.beds}</span> <span className="text-xs">letto</span></div>
                </div>
                <p className="mb-4 text-xs h-16">{stringCutter(props.item.description, 100)}</p> 
                <div className="flex items-center justify-between text-lg font-bold">
                    <p className="text-zappyblu">Canone d' affitto</p>
                    <p><span className="text-zappyblack">€ {props.item.price}</span> /mese</p>
                </div>
            </div>
        </li>) 
}