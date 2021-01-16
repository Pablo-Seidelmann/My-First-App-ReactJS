import React, { useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

import './AddCategory.css'

const AddCategory = ({ setCategories }) => {
    

    const [ inputValue, setInputValue ] = useState( 'Escribe Aca!' );

    const handleInputChange = ( e ) => setInputValue( e.target.value );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.length  > 5 ){
            setCategories( cats => [ ...cats, inputValue ] );
            setInputValue( '' );
         } else {
             swal({
                title: "A Ocurrido Algo Inesperado!",
                text: "Debe haber al menos 5 Caracteres!",
                icon: "warning",
                button: "Ok!",
              });
    
        };

    };
    
    return (

        <form className = 'form-category' onSubmit = { handleSubmit } >
            
            <input
                className = 'input-category'
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
            />
            
            <div className = 'btn-div'>

            <button className = 'btn-primary' type='submit'>Enviar</button>

            <button className = 'btn-secondary' type='submit'>Cancelar</button>

            </div>

        </form>
        
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
