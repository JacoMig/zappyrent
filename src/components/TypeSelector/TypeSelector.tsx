import React, {useState} from "react";
import {Objects} from '../../types';
import {Checkbox} from '../Checkbox/Checkbox';

type ComponentProps = {
    setTypes: (typesObjects:Objects) => void,
    types: Objects
} 

const typeOfObjectsText = (types:Objects) => {
    if(!types.some(type => type.checked)){
        return 'Tipologia'
    } else {
        const typesSelected = types.filter(type => type.checked)
        return typesSelected.length === 1 ? typesSelected[0].label : `${typesSelected[0].label} + ${typesSelected.length - 1}`
    }
}

export const TypeSelector = (props: ComponentProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const handleType = (key:string) => {
        props.setTypes(props.types.map(type => {
            if(type.key !== key) { return type }
            else !type.checked ? type.checked = true : type.checked = false
            return type
        }))
    }

    return (
        <div className="w-52 h-11 mr-12 relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setOpen(!open)} className="inline-flex justify-between w-full rounded-3xl border border-zappygrey shadow-sm px-3 py-2 bg-white text-zappygrey focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {typeOfObjectsText(props.types)}
                <svg className={`${open ? 'transform rotate-180' : ''} text-zappyblack mt-1 ml-2 h-5 w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            {open ? 
                <div className="origin-top-right z-20 absolute left-0 mt-2 w-56 rounded-xl border border-zappygrey bg-white" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        <ul>{props.types.map((type) => (<li key={type.key} className="text-zappygrey block px-4 py-2 text-sm" role="menuitem" id={type.key}>{<Checkbox label={type.label} checked={type.checked} orientation={'right'} keytype={type.key} handleType={(key:string) => handleType(key)} />}</li>))}</ul>
                    </div>
                </div>
            : null}
        </div>
    )
}
