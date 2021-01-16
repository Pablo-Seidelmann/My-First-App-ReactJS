import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddCategory from './components/AddCategory';
import SetCategory from './components/SetCategory';

const App = ({ defaultCategories = [] }) => {

  const [ categories, setCategories ] = useState( defaultCategories );

  const Title = styled.h2`
    color: #38C98D;
    font-weight: 900px;
    font-size: 25px;
    text-align: center;
  `

  return(

    <Fragment>

      <Title id = 'Title-App' >My First App!</Title>

      <AddCategory setCategories = { setCategories } />

      <hr />

      <ol>

        {
          categories.map( category => <SetCategory key = { category.toString() } category = { category } />)
        }
        
      </ol>

    </Fragment>

  );

};

App.propTypes = {
  Title: PropTypes.string.isRequired
}

export default App;
