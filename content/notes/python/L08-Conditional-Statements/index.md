---
title: "🧭 Conditional Statements in Python | Lesson 08"
author: Aryan
weight: 8
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 8
cascade:
   hideFeatureImage: true

---

## 🧭 Conditional Statements in Python

Conditional statements make your program **decide** what to do based on different situations. They let your code be smart and choose a path depending on conditions—like a traffic light for your program’s flow! 🚦

***

## What Are Conditional Statements? 🤔

They allow you to execute certain blocks of code **only if** a specific condition is true.

***

## 1. The `if` Statement ✅

Basic way to run code when a condition is true.

```python
age = 18
if age >= 18:
    print("You are an adult.")
```

- The code inside the `if` block runs only if `age >= 18` is true.

***

## 2. The `if-else` Statement 🔄

Choose between two paths.

```python
age = 16
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```


***

## 3. The `if-elif-else` Ladder 🪜

Check multiple conditions one by one.

```python
marks = 75
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: F")
```


***

## Important Tips for Conditionals

- Conditions return **True** or **False**.
- Indentation after `if`, `elif`, and `else` is **mandatory**.
- Use comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) in conditions.

***

## Practice Questions with Solutions 🏆

1. **Practice:** Write a program to check if a number is positive or negative.
    - **Solution:**

```python
num = int(input("Enter a number: "))
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
```

2. **Practice:** Check if a person is eligible to vote (age 18 or more).
    - **Solution:**

```python
age = int(input("Enter your age: "))
if age >= 18:
    print("Eligible to vote!")
else:
    print("Not eligible yet.")
```


***

## Step-by-Step Challenge: Simple Calculator 🧮

Write a program that asks the user to enter two numbers and an operator (+, -, *, /) and then performs the operation.

```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
op = input("Enter operator (+, -, *, /): ")

if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    if num2 != 0:
        print(num1 / num2)
    else:
        print("Error! Division by zero.")
else:
    print("Invalid operator.")
```


***

## Checklist for This Chapter ✅

- [x] Used `if` for simple decisions
- [x] Used `if-else` for two outcomes
- [x] Used `if-elif-else` for multiple choices
- [x] Handled conditions with comparison operators

***

You’re now ready to control the flow of your programs using decisions! Start building smart, interactive apps! 🚦🎉

