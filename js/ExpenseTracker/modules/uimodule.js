import { expenses } from "./expensesmodule.js";

let totalElement = document.createElement("p");
export const displayList = () => {
  try {
    let ul = document.getElementById("expenses-list");

    ul.innerHTML = "";

    let total = 0;

    expenses.forEach((expense) => {
      let expenseItem = document.createElement("li");
      expenseItem.textContent = `${expense.expenseName}: $${expense.expensePrice}`;

      ul.appendChild(expenseItem);

      total += +expense.expensePrice;
    });

    totalElement.textContent = `Total: ${total}`;

    document.body.appendChild(totalElement);
  } catch (error) {
    alert(`uiModule Error: ${error.message}`);
  }
};
