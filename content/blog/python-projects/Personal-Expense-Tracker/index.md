---
title: "Personal Expense Tracker 💰"
author: Aryan
weight: 1              
draft: false
summary: "Build a program that lets users add, view, and categorize their daily expenses. Users can save expenses to a file, view summaries by category, and get a monthly report. ..."
description: Build a program that lets users add, view, and categorize their daily expenses. Users can save expenses to a file, view summaries by category, and get a monthly report.
tags: ["Python", "Progmramming", "course"]
cascade:
   hideFeatureImage: true

---


Let's create a **Personal Expense Tracker** program in Python step-by-step! This program will let users:

- Add expenses with categories and description
- View all expenses
- View expense summaries by category
- Get a monthly report
- Save and load expenses from a file for persistence

***

### Step 1: Import necessary modules

We'll use:

- `datetime` for timestamps
- `json` for file handling data (easy to save/load dictionaries)
- Exception handling to avoid crashes on invalid inputs

```python
import datetime
import json
```


***

### Step 2: Define functions

1. **Add Expense:** Get info from user and add to data
2. **View Expenses:** Print all expenses with details
3. **Summary by Category:** Sum expenses in each category
4. **Monthly Report:** Sum expenses in current month
5. **Save and Load:** Save to and load from a JSON file
```python
def add_expense(expenses):
    try:
        amount = float(input("Enter expense amount: 💵 "))
        category = input("Enter category (e.g. Food, Transport): ").strip().title()
        description = input("Enter description: ").strip()
        date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        expense = {"amount": amount, "category": category, "description": description, "date": date}
        expenses.append(expense)
        print("Expense added successfully! ✅")
    except ValueError:
        print("Invalid amount! Please enter a number. ❌")

def view_expenses(expenses):
    if not expenses:
        print("No expenses recorded yet. 📝")
        return
    print("\nAll Expenses:")
    for i, exp in enumerate(expenses, start=1):
        print(f"{i}. {exp['date']} - {exp['category']} - ${exp['amount']:.2f} - {exp['description']}")

def summary_by_category(expenses):
    summary = {}
    for exp in expenses:
        summary[exp["category"]] = summary.get(exp["category"], 0) + exp["amount"]
    if not summary:
        print("No expenses to summarize. 📊")
        return
    print("\nSummary by Category:")
    for cat, total in summary.items():
        print(f"{cat}: ${total:.2f}")

def monthly_report(expenses):
    now = datetime.datetime.now()
    month_expenses = [exp for exp in expenses if datetime.datetime.strptime(exp["date"], "%Y-%m-%d %H:%M:%S").month == now.month and
                      datetime.datetime.strptime(exp["date"], "%Y-%m-%d %H:%M:%S").year == now.year]
    if not month_expenses:
        print(f"No expenses for {now.strftime('%B %Y')}. 📅")
        return
    total = sum(exp["amount"] for exp in month_expenses)
    print(f"\nMonthly Report for {now.strftime('%B %Y')}:")
    print(f"Total expenses: ${total:.2f}")

def save_expenses(expenses, filename="expenses.json"):
    try:
        with open(filename, "w") as f:
            json.dump(expenses, f)
        print("Expenses saved successfully! 💾")
    except Exception as e:
        print(f"Error saving expenses: {e}")

def load_expenses(filename="expenses.json"):
    try:
        with open(filename, "r") as f:
            expenses = json.load(f)
        print("Expenses loaded successfully! 🔄")
        return expenses
    except FileNotFoundError:
        print("No saved expenses found, starting fresh. 🆕")
        return []
    except Exception as e:
        print(f"Error loading expenses: {e}")
        return []
```


***

### Step 3: Main loop to interact with user

```python
def main():
    expenses = load_expenses()
    
    while True:
        print("\n=== Personal Expense Tracker ===")
        print("1. Add Expense")
        print("2. View Expenses")
        print("3. Summary by Category")
        print("4. Monthly Report")
        print("5. Save & Exit")
        print("6. Exit without Saving")
        
        choice = input("Choose an option (1-6): ")
        
        if choice == "1":
            add_expense(expenses)
        elif choice == "2":
            view_expenses(expenses)
        elif choice == "3":
            summary_by_category(expenses)
        elif choice == "4":
            monthly_report(expenses)
        elif choice == "5":
            save_expenses(expenses)
            print("Goodbye! 👋")
            break
        elif choice == "6":
            print("Goodbye without saving! 👋")
            break
        else:
            print("Invalid choice, please try again! ❗")
```


***

### How to run?

Save this full script and run it. You can add daily expenses, view reports, and save your data persistently.

***

### Practice Exercise 📚

Try to extend this program to:

- Add a feature to delete an expense by its number
- Allow user to view expenses filtered by category or date range

***

If you want, I can also provide the full combined script file for easy copy-pasting! Would you like that? 😊

