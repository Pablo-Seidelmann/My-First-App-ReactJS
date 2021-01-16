import React from 'react';
import PropTypes from 'prop-types'; 

import './SetCategory.css'

const SetCategory = ({ category }) => {

    return (

        <div className = 'div-list'>
            
            <li className = 'list'>
                { category }
            </li>

        </div>

    );
};

SetCategory.propTypes = {
    category: PropTypes.string.isRequired
};

export default SetCategory;
