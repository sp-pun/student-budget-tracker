import type { BudgetSummary } from "../types";

interface SummaryCardsProps {
  summary: BudgetSummary;
}

function SummaryCards({ summary }: SummaryCardsProps) {
  // Format absolute dollar value here; sign is handled later in the balance card.
  const formatCurrency = (amount: number): string => {
    return "$" + Math.abs(amount).toFixed(2);
  };

  return (
    <div className="summary">
      {/* Income Card */}
      <div className="summary-card income">
        <div className="label">Total Income</div>
        <div className="amount">{formatCurrency(summary.totalIncome)}</div>
      </div>

      {/* Expenses Card */}
      <div className="summary-card expenses">
        <div className="label">Total Expenses</div>
        <div className="amount">{formatCurrency(summary.totalExpenses)}</div>
      </div>

      {/* Balance Card */}
      <div
        className={`summary-card balance ${summary.balance < 0 ? "negative" : ""}`}
      >
        {/* Apply the "negative" class to highlight when expenses exceed income. */}
        <div className="label">Balance</div>
        <div className="amount">
          {summary.balance < 0 ? "-" : ""}
          {formatCurrency(summary.balance)}
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
