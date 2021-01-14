import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import swal from 'sweetalert';

const AddCategory = ({ setCategories }) => {

    const Form = styled.form`
    text-align: center;
    margin: 50px;
`

    const Input = styled.input`
        padding: 40px;
        border-radius: 20px;
        border: 1px solid #38C98D;
        color: grey;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
    `

    const InputButton = styled.button`
        margin-left: 10px;
        background-color: ${ props => props.primary ? '#38C98D' : 'grey' };
        color: #fff;
        padding: 8px 20px; 
        border-radius: 5px;
        border: 1px solid grey;
        font-weight: bold;

        &:hover
        {
            background-color: ${ props => props.hover ? '#808090' : null };
            transition: 1.5s;
        }
    `

    const DivButton = styled.div`
        text-align: center;
        position: relative;
        top: 20px;
    `

    const [ inputValue, setInputValue ] = useState('Escribe Aca!');

    const handleInputChange = ( e ) => setInputValue( e.target.value );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.length > 5 ) {
            setCategories( ( cats ) => [ ...cats, inputValue ] );
            setInputValue('');
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

        <Form onSubmit = { handleSubmit } >
            
            <Input 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
            />

            <DivButton>

            <InputButton primary type='submit' >Enviar</InputButton>

            <InputButton hover type='reset' >Cancelar</InputButton>

            </DivButton>

        </Form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
