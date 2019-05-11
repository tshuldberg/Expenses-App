import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatchEvent(removeExpense({ id }));
    }}>Remove Expense</button>
  </div>
);

export default connect()(ExpenseListItem);