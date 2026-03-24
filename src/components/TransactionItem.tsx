import type { Transaction, Category } from "../types";

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
}

// Map category to emojis and CSS classes.
const categoryEmojis: Record<Category, string> = {
  Food: "🍔",
  Transport: "🚗",
  Entertainment: "🎮",
  Shopping: "🛍️",
  Bills: "📄",
  Income: "💵",
  Other: "📦",
};

const categoryClasses: Record<Category, string> = {
  Food: "food",
  Transport: "transport",
  Entertainment: "entertainment",
  Shopping: "shopping",
  Bills: "bills",
  Income: "income-cat",
  Other: "other",
};

function TransactionItem({ transaction, onDelete }: TransactionItemProps) {
  const formatCurrency = (amount: number): string => {
    return "$" + amount.toFixed(2);
  };

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <div className={`category-icon ${categoryClasses[transaction.category]}`}>
          {categoryEmojis[transaction.category]}
        </div>
        
        <div className="transaction-details">
          <div className="transaction-description">{transaction.description}</div>
          <div className="transaction-meta">
            <span>{transaction.category}</span>
            <span>•</span>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>
      <div className="transaction-right">
        {/* Add + for income and - for expense so direction is clear at a glance. */}
        <span className={`transaction-amount ${transaction.type}`}>
          {transaction.type === "expense" ? "-" : "+"}
          {formatCurrency(transaction.amount)}
        </span>

        {/* Click calls parent callback so App can update shared transaction state. */}
        <button
          className="delete-btn"
          onClick={() => onDelete(transaction.id)}
          title="Delete transaction"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
