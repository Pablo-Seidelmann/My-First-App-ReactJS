import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import AddCategory from './components/AddCategory';
import SetCategory from './components/SetCategory';

const App = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const H2 = styled.h2`
    color: #38C98D;
    font-weight: 900px;
    font-size: 25px;
    text-align: center;
  `

  return(

    <Fragment>

      <H2>My First App!</H2>

      <AddCategory setCategories = { setCategories } />

      <hr />

      <ol>
        {
          categories.map( ( category ) => <SetCategory key = { category.toString() } category = { category } />)
        }
      </ol>

    </Fragment>

  )

}

export default App;
