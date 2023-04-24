import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);

  return <ExpensesOutput expenses={expenses} expensesPeriod="total" fallbackText="No registered expenses found!"/>
}

export default AllExpenses;