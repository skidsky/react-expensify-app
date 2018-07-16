import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// class created to avoid inline function?
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
        // props.dispatch(addExpense(expense)); // transfered to mapDispatchToProps
        this.props.addExpense(expense); // not yet clear!
        this.props.history.push('/');
  };
  render () {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={ this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);