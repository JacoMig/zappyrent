import React, {useState} from 'react';
import './style.css';

type checkboxPropsType = {
    label: string, 
    keytype?: string, 
    handleType?: (key:string) => void, 
    handleAvailable?: (flag: boolean) => void
    orientation?: string
    checked?: boolean
}

export const Checkbox = (props:checkboxPropsType) => {
    const [checked, setChecked] = useState(props.checked ? props.checked : false);
 
    const handleChange = () => {
        setChecked(!checked);
        props.keytype && props.handleType && props.handleType(props.keytype)
        props.handleAvailable && props.handleAvailable(!checked)
    };
    
    return (
        <div className="checkboxSelector">
            <label className="inline-flex items-center cursor-pointer">
                {props.orientation === 'left' ?  <p className="mr-2">{props.label}</p> : null}
                <input type="checkbox" className="form-checkbox text-green-500" checked={checked} onChange={handleChange} />
                <span className="border border-zappygrey rounded-sm"></span>
                {props.orientation === 'right' ? <p className="ml-2">{props.label}</p> : null}
            </label>
        </div>
    )
}