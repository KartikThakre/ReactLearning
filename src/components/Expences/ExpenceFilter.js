import React from 'react';

import './ExpenceFilter.css';

const ExpenceFilter = (props) => {

const dropDownHandler = (event) =>{
    
    //useing props form Expencedate.js to pass the value in ExpenceData
    props.onSubmitExpenceFilter(event.target.value);
};



  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectYear} onChange={dropDownHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenceFilter;