import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem( itemData ) {
  return (
    <ExpenseItem { ...itemData.item } />
  )
}

function ExpensesList( { expensesData } ) {
  return (
    <FlatList
      data={ expensesData }
      renderItem={ renderExpenseItem }
      keyExtractor={ ( item ) => item.id }
    />
  )
}

export default ExpensesList;