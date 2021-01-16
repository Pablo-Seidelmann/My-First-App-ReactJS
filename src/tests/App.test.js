import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import App from '../App';

describe('Pruebas al Componente <App />', () => {

    let wrapper;

    beforeEach(() => {

        const title = 'My First App!';

        wrapper = shallow( <App title = { title } /> );

    })



    test('Snapshot al Componente Testeado', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('El titulo deberia ser el mismo', () => {
        
        const title = wrapper.find( '.title' );

        expect( title.exists() ).toBe( true );

        expect( title.text().trim() ).toBe( 'My First App!' );

    });

    test('Debe de haber 2 elementos en el setCategories', () => {
       
        const title = 'My First App!';


        const categories = ['Pablo', 'El Tula'];

        const wrapper = shallow( <App defaultCategories = { categories } title = { title } /> );
        
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( 'SetCategory' ).length ).toBe( categories.length );

    });
    
    

});
