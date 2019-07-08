import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
        <ExpenseForm 
        onSubtmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.hisory.push('/');
        }}
        />
        </div>
      </div>
    );
  }
}

// const AddExpensePage = () => (
//   <div>
//     <h1>Add Expense</h1>
    // <ExpenseForm 
    //   onSubtmit={(expense) => {
    //     props.dispatch(addExpense(expense));
    //     props.hisory.push('/');
    //   }}
    // />
//   </div>
// );


export default connect()(AddExpensePage);