import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import swal from 'sweetalert';

const AddCategory = ({ setCategories }) => {

    const Form = styled.form`
        margin: 50px;
        text-align: center;
    `

    const Input = styled.input`
        color: grey;
        border-radius: 20px;
        border: 1px solid #38C98D;
        font-weight: bold;
        font-size: 15px;
        padding: 40px;
        text-align: center;
    `

    const Button = styled.button`
        border-radius: 5px;
        border: 1px solid grey;
        background-color: ${ props => props.primary ? '#38C98D' : 'grey' };
        font-weight: bold;
        color: #fff;
        margin-left: 10px;
        padding: 8px 20px; 

        &:hover
        {
            background-color: ${ props => props.hover ? '#808090' : null };
            transition: 1.5s;
        }
    `

    const DivButton = styled.div`
        position: relative;
        text-align: center;
        top: 20px;
    `

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

        <Form id = 'Form-Category' onSubmit = { handleSubmit } >
            
            <Input
                id = 'Input-Category' 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
            />

            {/* <p>{ inputValue }</p> Despues Borrar! */}

            <DivButton>

            <Button id = 'Button-Category' primary type='submit'>Enviar</Button>

            <Button id = 'Button-Category' hover type='submit'>Cancelar</Button>

            </DivButton>

        </Form>
        
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
