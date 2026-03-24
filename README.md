# 💰 Student Budget Tracker — Starter Project

**IT 431 — Advanced Web Development | Midterm Project**

## Overview

Build a React + TypeScript budget tracker application. The app lets users add income and expenses, view a running balance, filter transactions by category, and delete entries.

## Getting Started

```bash
# 1. Clone this repository
git clone https://github.com/rmichak/it431-budget-tracker-project-starter.git
cd it431-budget-tracker-project-starter

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`) to run the app locally.

## What's Provided

- ✅ **`App.css`** — All styling is done for you. You should not need to modify this file.
- ✅ **`types.ts`** — TypeScript interfaces and types are defined.
- ✅ **`main.tsx`** — App entry point (no changes needed).
- ✅ **Component files** — The app is organized by reusable UI components.

## What You Need To Build

If you want to review or rebuild the project as practice, this is a useful order:

### 1. `components/TransactionItem.tsx` (Start here — smallest component)
- Define the props interface
- Display transaction data (description, category, date, amount)
- Wire up the delete button

### 2. `components/SummaryCards.tsx`
- Define the props interface
- Render three summary cards (Income, Expenses, Balance)

### 3. `components/TransactionForm.tsx`
- Define the props interface
- Create state for form fields (description, amount, category, type)
- Handle form submission with validation
- Wire up all inputs with value + onChange

### 4. `components/TransactionList.tsx`
- Define the props interface
- Add filter state and filtering logic
- Render filter buttons and transaction items

### 5. `App.tsx` (Bring it all together)
- Create transactions state
- Write calculateSummary, handleAddTransaction, handleDeleteTransaction
- Render all child components with correct props

## Deployment

When your app is working locally:

1. Create your own GitHub repository and push your code
2. Deploy to Vercel (connect your GitHub repo)
3. Submit both URLs (GitHub repo + Vercel live link)

## Grading Criteria

| Criteria | Points |
|----------|--------|
| TypeScript interfaces & type safety | 15 |
| Component structure & props | 20 |
| State management (useState) | 20 |
| Event handling (forms, clicks) | 15 |
| List rendering & conditional display | 15 |
| GitHub repo & Vercel deployment | 10 |
| Code quality & organization | 5 |
| **Total** | **100** |

## Reference

Here's what the finished app looks like:

![Reference Screenshot](screenshot-reference.png)

**Live demo:** https://student-budget-tracker-smoky.vercel.app

## Tips

- Start small — get one component rendering before moving to the next
- Use the browser console to debug (F12 → Console tab)
- The CSS class names used by the UI are defined in `App.css`
- When in doubt, check the TypeScript types in `types.ts`
- Test your form: try submitting with empty fields to make sure validation works

## Key Concepts Used

- React functional components
- Props with TypeScript interfaces
- State management with `useState`
- Controlled form inputs
- Event handling (`onClick`, `onChange`, `onSubmit`)
- List rendering with `.map()` and keys
- Conditional rendering
- Array methods: `.filter()`, `.reduce()`, `.map()`

Good luck! 🚀
