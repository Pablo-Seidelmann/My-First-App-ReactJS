import { shallow } from 'enzyme';

import SetCategory from '../../components/SetCategory'; 

describe('Pruebas a el Componente <SetCategory />', () => {
    
    const category = 'Hola Mundo';

    const wrapper = shallow( <SetCategory category = { category } /> );

    test('SnapShot al Componente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de haber una lista y dentro la category', () => {
        
        const listItem = wrapper.find('#list-item').text().trim();

        expect( listItem ).toBe( category );

    });
    
    

});
