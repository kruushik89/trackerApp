import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {
  },
  deleteExpense: (id) => {
  },
  setExpense: (expenses) => {
  },
  updateExpense: (id, { description, amount, date }) => {
  },
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'ADD':
      return [action.payload, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData })
  }

  function setExpenses(expenses) {
    console.log('-----------------------', expenses)
    dispatch({type: 'SET', payload: expenses})
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
  }

  const values = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;