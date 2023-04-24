import axios from 'axios';

const BASE_URL = 'https://react-native-course-1ddb3-default-rtdb.firebaseiocom';

export async function storeExpense(expenseData) {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
  console.log('response', response.data);

  const expense = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    }
    expense.push(expenseObj);
  }

  return expense;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`);
}