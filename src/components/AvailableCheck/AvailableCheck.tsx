import { Checkbox } from '../Checkbox/Checkbox'

type AvailablePropsType = {
  setAvailability: (flag: boolean) => void
}

export const AvailableCheck = (props: AvailablePropsType) => {
  return (
    <Checkbox
      label={'Disponibile subito'}
      orientation={'left'}
      handleAvailable={props.setAvailability}
    />
  )
}
