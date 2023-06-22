export const expenses = [];

export const addExpenses = (expenseName, expensePrice) => {
  try {
    let expenseObj = {
      expenseName,
      expensePrice,
    };

    expenses.push(expenseObj);
  } catch (error) {
    alert(`exppenseModule error: ${error.message}`);
  }
};
