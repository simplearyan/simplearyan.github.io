---
title: "🚫 Exception Handling in Python | Lesson 13"
author: Aryan
weight: 13              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 13       
cascade:
   hideFeatureImage: true

---


## 🚫 Exception Handling in Python

Mistakes (errors) can happen when your program runs, like dividing by zero or opening a missing file. These errors are called **exceptions**. Exception handling helps your program **handle errors gracefully** without crashing, so your app can respond or recover smartly! Let’s learn how to handle exceptions. 🛡️

***

## What is an Exception? 🤔

An exception is an error detected during program execution that interrupts the normal flow of the program.

Example:

```python
print(5 / 0)    # ZeroDivisionError: division by zero
```


***

## Try and Except Block 🧰

Use `try` to run code that might cause an error and `except` to handle the error.

```python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print("Result is", result)
except ZeroDivisionError:
    print("Error! You can’t divide by zero.")
except ValueError:
    print("Invalid input! Please enter a valid integer.")
```

This catches specific errors and lets the program continue.

***

## Catching All Exceptions 🌐

You can catch any exception (not recommended for all cases but useful sometimes):

```python
try:
    # risky code here
except Exception as e:
    print("An error occurred:", e)
```


***

## Finally Block 🔄

Code inside `finally` runs **no matter what**, useful for cleanup (closing files, releasing resources).

```python
try:
    file = open("test.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    file.close()
    print("File closed.")
```


***

## Raising Exceptions 🔔

You can also **raise** your own exceptions using `raise`.

```python
def check_age(age):
    if age < 18:
        raise ValueError("Age must be at least 18.")
    else:
        print("Access granted.")

check_age(15)  # Raises ValueError with message
```


***

## Practice Questions with Solutions 🏆

1. Write a program that asks for a number and prints its square. Use exception handling for invalid inputs.
    - **Solution:**

```python
try:
    num = int(input("Enter a number: "))
    print("Square:", num * num)
except ValueError:
    print("Please enter a valid integer!")
```

2. Write a program to read a file safely using `try-except-finally`.
3. Create a function that raises an exception if a string input is empty.

***

## Step-by-Step Mini Project: Safe Division Calculator 🧮

Make a calculator that divides two numbers but handles errors gracefully.

```python
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error! Cannot divide by zero."
    except TypeError:
        return "Error! Inputs must be numbers."
    
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
print("Division result:", safe_divide(num1, num2))
```


***

## Checklist for This Chapter ✅

- [x] Used `try` and `except` to catch errors
- [x] Handled specific and general exceptions
- [x] Used `finally` for cleanup
- [x] Raised custom exceptions with `raise`

***

You’re now ready to build robust programs that won’t crash when things go wrong! Practice catching errors and make your apps user-friendly! 🚀

