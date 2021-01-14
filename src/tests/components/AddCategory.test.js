import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas al Componente <AddCategory />', () => {
   
    const setCategories = jest.fn();

    const wrapper = shallow( <AddCategory setCategories = { setCategories } /> );

    test('SnapShot al Componente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('El valor del input debe ser un string', () => {
       
        const value = 'Escribe Aca!';
        const input = wrapper.find( '#Input-Category' );

        expect( input.prop( 'value' ) ).toBe( value );

        expect( input.exists() ).toBe( true );

    });

    test('El onChange debe estar de forma correctamente', () => {
        
        const value = 'Hola Mundo';

        const change = wrapper.find( '#Input-Category' ).prop( 'onChange' );

        change.simulate('change', { target: { value: value } });

        expect( change ).toBe( value );

    });
    
    
    
    
});
