import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import AddCategory from './components/AddCategory';
import SetCategory from './components/SetCategory';

const App = ({ defaultCategories = [], title }) => {

  const [ categories, setCategories ] = useState( defaultCategories );

  return(

    <Fragment>

      <h2 className = 'title'>{ title }</h2>

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
  title: PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'My First App!'
}

export default App;
