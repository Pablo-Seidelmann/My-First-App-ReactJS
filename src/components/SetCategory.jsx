import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const SetCategory = ({ category }) => {

    const Div = styled.div`
        text-align: center;
        margin-bottom:  20px;
    `

    const Li = styled.li`
        font-weight: bold;
        color: #5e5e5e;
    `

    return (

        <Div>
            
            <Li id = 'list-item'>
                { category }
            </Li>

        </Div>

    )
}

SetCategory.propTypes = {
    category: PropTypes.string.isRequired
}

export default SetCategory;
