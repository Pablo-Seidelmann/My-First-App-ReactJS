import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import AddCategory from '../../components/AddCategory';

describe('Pruebas al Componente <AddCategory />', () => {

    const setCategories = jest.fn();

    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories } /> );
    })

    test('SnapShot al Componente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('El valor del input debe ser un string', () => {

        const value = 'Hola Mundo';

        const input = wrapper.find( '#Input-Category' );

        input.simulate( 'change', { target: { value:value } } );

        expect( wrapper.find( 'p' ).text().trim() ).toBe( value );

        const valueInput = wrapper.find( '#Input-Category' ).prop( 'value' );

        expect( valueInput ).toBe( value );

    });

    test('El onChange debe estar de forma correctamente', () => {
        
        const value = 'Hola Mundo';

        const change = wrapper.find( '#Input-Category' );

        change.simulate('change', { target: { value:value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });
    
    test('El form debe de estar de manera correcta', () => {
        
        wrapper.find( '#Form-Category' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();

    });

    test('Los botones Submit deberian haberse llamado una vez', () => {
        
        const input = wrapper.find( '#Input-Category' );

        input.simulate( 'submit' );

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Deberia Enviar algo y luego el valor del input debe estar vacio', () => {
        
        const value = 'Hola Mundo';

        wrapper.find('#Input-Category').simulate('change', { target: { value: value } });

        wrapper.find('#Form-Category').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalledTimes( 1 )

        expect( wrapper.find( '#Input-Category' ).prop('value') ).toBe( ' '.trim() )

    });
    
    
    
    
    
});
