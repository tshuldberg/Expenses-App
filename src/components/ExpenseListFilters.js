import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = () => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
  </div>
);

const mapStateToProps = (states) => {
  return {
    filters: states.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);