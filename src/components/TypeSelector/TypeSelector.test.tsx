import {handleTypes, typeOfObjectsText, TypeSelector} from './TypeSelector'
import { DropdownItemType, Objects } from '../../types';
import {render, fireEvent } from '@testing-library/react';
import { typesObjects } from '../../App';

const type:DropdownItemType =  {
    key: 'private',
    label: 'Private Room',
    checked: false
}

const componentProps = {
    setTypes: () => {},
    types: typesObjects
}

const renderTypeSelector = () => {
    return render(<TypeSelector {...componentProps} />)
}

describe('Dropdown Types Selector', () => {
    
    afterEach(() => {
        const {unmount} = renderTypeSelector()
        unmount()
    })
  
    it('should appear the dropdown by clicking once', () => {
        const {getByRole} = renderTypeSelector()
        fireEvent.click(getByRole('Button'))
       expect(getByRole('DropdownMenu')).toBeInTheDocument()
    })

    it('should render 4 menu item based on the typesObjects', () => {
        const {getByRole, queryAllByRole} = renderTypeSelector()
        fireEvent.click(getByRole('Button'))
        expect(queryAllByRole('menuitem')).toHaveLength(4)
    }) 
    
});

describe("Unit Test for functions typeOfObjectsText() and handleType()", () => {
    it('handleTypes() should return the object with the checked flag changed if the passed key exists', () => {
       
        expect(handleTypes('private', type)).toEqual({
           ...type,
            checked: true
        });
    });
    it('handleTypes() should return the same object if the passed key does not exist', () => {
       
        expect(handleTypes('jungle', type)).toEqual({
           ...type
        });
    });

    it('typeOfObjectsText() should return "Tipologia" string if there is not at least one checked type', () => {
        const typesObjects:Objects = [
            {
                key: 'private',
                label: 'Private Room',
                checked: false
            },
            {
                key: 'entire',
                label: 'Entire Property',
                checked: false
        }] 
        expect(typeOfObjectsText(typesObjects)).toEqual('Tipologia')
    })

    it('typeOfObjectsText() should return the selected label', () => {
        const typesObjects:Objects = [
            {
                key: 'private',
                label: 'Private Room',
                checked: true
            },
            {
                key: 'entire',
                label: 'Entire Property',
                checked: false
        }] 
        expect(typeOfObjectsText(typesObjects)).toEqual('Private Room')
    })

    it('typeOfObjectsText() should return the selected labels if are more than one checks', () => {
        const typesObjects:Objects = [
            {
                key: 'private',
                label: 'Private Room',
                checked: true
            },
            {
                key: 'entire',
                label: 'Entire Property',
                checked: true
        }] 
        expect(typeOfObjectsText(typesObjects)).toEqual('Private Room +1')
    })
})