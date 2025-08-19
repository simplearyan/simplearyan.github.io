---
title: "🛠️ Functions in Python | Lesson 10"
author: Aryan
weight: 10              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 10       
cascade:
   hideFeatureImage: true

---

## 🛠️ Functions in Python

Functions are reusable blocks of code that perform a specific task. They help you write cleaner, modular, and organized programs. Instead of repeating code, you write a function once and use it whenever needed! Let's explore how to create and use functions. 🚀

***

## What is a Function? 🤔

A **function** is a named block of code designed to do a particular job. Functions can take inputs, do some processing, and optionally return a result.

***

## 1. Defining a Function 🔧

Use the `def` keyword, followed by the function name and parentheses.

```python
def greet():
    print("Hello, World!")
```

To **call** the function and run its code:

```python
greet()  # Output: Hello, World!
```


***

## 2. Function Parameters and Arguments 🎯

Functions can take **parameters** (inputs) to make them flexible.

```python
def greet(name):
    print(f"Hello, {name}!")
```

Call with an **argument**:

```python
greet("Anita")  # Hello, Anita!
```


***

## 3. Returning Values 🔄

Functions can send back a result using the `return` statement.

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
```


***

## 4. Default Parameters 🎁

Functions can have default values for parameters.

```python
def greet(name="Friend"):
    print(f"Hello, {name}!")

greet()          # Hello, Friend!
greet("Rahul")   # Hello, Rahul!
```


***

## 5. Keyword Arguments 🗝️

You can specify arguments by name.

```python
def describe_pet(name, animal="dog"):
    print(f"{name} is a {animal}.")

describe_pet(animal="cat", name="Milo")  # Milo is a cat.
```


***

## Practice Questions with Solutions 🏆

1. **Practice:** Write a function `square()` that returns the square of a number.
    - **Solution:**

```python
def square(num):
    return num * num
print(square(4))  # 16
```

2. **Practice:** Write a function `is_even()` that checks if a number is even and returns `True` or `False`.
    - **Solution:**

```python
def is_even(n):
    return n % 2 == 0

print(is_even(7))  # False
print(is_even(8))  # True
```

3. **Practice:** Create a function `greet` that prints "Welcome!" if no name is given or "Welcome, <name>!" if a name is provided.
    - **Solution:**

```python
def greet(name=""):
    if name:
        print(f"Welcome, {name}!")
    else:
        print("Welcome!")

greet()
greet("Anil")
```


***

## Step-by-Step Mini Project: Calculator Functions 🔢

Write functions for add, subtract, multiply, and divide, then use them.

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Error! Division by zero."

print(add(10, 5))        # 15
print(divide(8, 0))      # Error! Division by zero.
```


***

## Checklist for This Chapter ✅

- [x] Defined and called functions
- [x] Used parameters and arguments
- [x] Returned values from functions
- [x] Used default and keyword arguments

***

You now know how to create and use functions to keep your programs neat, reusable, and efficient! Start practicing by building calculators, converters, and games! 🎉

