import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const SetCategory = ({ category }) => {

    const DivList = styled.div`
        margin-bottom:  20px;
        text-align: center;
    `

    const List = styled.li`
        color: #5e5e5e;
        font-weight: bold;
    `

    return (

        <DivList>
            
            <List id = 'list-item'>
                { category }
            </List>

        </DivList>

    );
};

SetCategory.propTypes = {
    category: PropTypes.string.isRequired
};

export default SetCategory;
