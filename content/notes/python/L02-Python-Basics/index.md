---
title: "👶 Python Basics | Lesson 02"
author: Aryan
weight: 2
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 2
cascade:
   hideFeatureImage: true

---


## 👶 Python Basics

Welcome to **Python Basics**! Mastering this chapter will give you the foundation for everything else in programming. Let’s start with the very simple concepts and grow step by step. 🌱

***

## What You’ll Learn 🎯

- Python syntax and indentation
- Printing messages
- Basic data types: integers, floats, strings, booleans
- Variables: storing data
- Comments

***

## 1. Python Syntax \& Indentation 🎨

- **Python cares about indentation!**
Indentation (spaces at the start of a line) decides structure in Python.
- Every new code block (like after :) uses the **same indentation**.

```python
if True:
    print("Hello!")  # This line is indented
```


***

## 2. Printing Messages 📢

Use the `print()` function to display output.

```python
print("Welcome to Python! 🐍")
```

_Output:_

```
Welcome to Python! 🐍
```


***

## 3. Variables: Storing Data 📦

A **variable** is a name for a value. Assignment uses `=`.

```python
name = "Alex"
age = 21
height = 1.75
is_student = True
```

- `name` holds a **string** (`"Alex"`)
- `age` is an **integer** (`21`)
- `height` is a **float** (`1.75`)
- `is_student` is a **boolean** (`True`)

***

## 4. Data Types Explained 🔤

| Data Type | Example | Description |
| :-- | :-- | :-- |
| int | `5` | Whole numbers |
| float | `3.14` | Decimal numbers |
| str | `"Hello"` | Text |
| bool | `True` | True/False values |

You can check a variable’s type with `type()`:

```python
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>
print(type(is_student)) # <class 'bool'>
```


***

## 5. Comments 📝

Use the hash sign (`#`) to add comments (notes the program ignores).

```python
# This is a comment!
print("Python is fun!")  # This prints a message
```


***

## Practice Questions with Solutions 🏆

1. **Practice:** Create a variable called `city` that stores your city name and print it.
    - **Solution:**

```python
city = "Delhi"
print(city)
```

2. **Practice:** What is the output?

```python
a = 10
b = 3.5
print(a + b)
```

    - **Solution:**
`13.5`
3. **Practice:** Use comments to describe the line.
    - **Solution:**

```python
# Assigning a value to temperature
temperature = 37.5
```


***

## Step-by-Step Mini Project: Printing a Bio Card 🎫

Let’s use what we learned!

```python
# My Bio Card
name = "Sara"
age = 19
is_new_student = True

print("Name:", name)
print("Age:", age)
print("New Student?", is_new_student)
```

_Output:_

```
Name: Sara
Age: 19
New Student? True
```


***

## Checklist for This Chapter ✅

- [x] Understood Python indentation
- [x] Used `print()` to display output
- [x] Created and used variables of different types
- [x] Used comments to clarify code

***

You’ve just built a strong Python foundation! All set for more awesome skills ahead! 🚀👏

