import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters'
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';  


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 2111000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 400, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 2111000 }));
// store.dispatch(setTextFilter('water'));  

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
