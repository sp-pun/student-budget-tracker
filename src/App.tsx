import { useState } from "react";
import type { Transaction, Category, BudgetSummary } from "./types";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  // useState stores all transactions; nextId gives each new entry a unique ID.
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [nextId, setNextId] = useState(1);

  // Build summary values from the transaction list using filter + reduce.
  const calculateSummary = (txns: Transaction[]): BudgetSummary => {
    const totalIncome = txns
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = txns
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
    };
  };

  const handleAddTransaction = (
    description: string,
    amount: number,
    category: Category,
    type: "income" | "expense"
  ) => {
    // Data rule: all income transactions are stored under the "Income" category.
    const newTransaction: Transaction = {
      id: nextId,
      description,
      amount,
      category: type === "income" ? "Income" : category,
      type,
      date: new Date().toISOString().split("T")[0],
    };

    setTransactions([newTransaction, ...transactions]);
    setNextId(nextId + 1);
  };

  const handleDeleteTransaction = (id: number) => {
    // filter returns a new array without the transaction that matches this ID.
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const summary = calculateSummary(transactions);
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          💰 Student <span>Budget Tracker</span>
        </h1>
        <p>Track your income and expenses in one place</p>
      </header>

      <SummaryCards summary={summary} />

      <div className="main-content">
        <TransactionForm onAddTransaction={handleAddTransaction} />

        <TransactionList
          transactions={transactions}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </div>

      <footer className="app-footer">
        Built with React + TypeScript — IT 431 Advanced Web Development
      </footer>
    </div>
  );
}

export default App;
