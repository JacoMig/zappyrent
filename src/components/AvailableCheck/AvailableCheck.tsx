import { Checkbox } from "../Checkbox/Checkbox"

type availablePropsType = {
    setAvailability: (flag: boolean) => void;
}

export const AvailableCheck = (props:availablePropsType) => {
    return (<Checkbox label={'Disponibile subito'} orientation={'left'} handleAvailable={props.setAvailability} />)
}
