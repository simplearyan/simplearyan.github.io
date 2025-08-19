---
title: "⚡ List and Dictionary Comprehension in Python | Lesson 11"
author: Aryan
weight: 11              
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 11       
cascade:
   hideFeatureImage: true

---


## ⚡ List and Dictionary Comprehension in Python

List and dictionary comprehensions are **powerful, compact ways** to create and transform lists or dictionaries in a single line of code. They help you write cleaner, faster, and more readable code compared to traditional loops! Let’s explore how to use them with examples and a fun small project. 🚀

***

## 1. List Comprehension 📝

A concise way to create or transform a list.

### Syntax:

```python
[expression for item in iterable if condition]
```

- `expression` is what you want to include in the new list.
- `iterable` is a sequence or collection you loop over.
- Optional `if condition` filters items.


### Example:

Create a list of squares for numbers 1 to 5.

```python
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]
```

Filter to include only even squares:

```python
even_squares = [x**2 for x in range(1, 6) if x % 2 == 0]
print(even_squares)  # [4, 16]
```


***

## 2. Dictionary Comprehension 📚

Create a dictionary from an iterable, also compact and clear.

### Syntax:

```python
{key_expression: value_expression for item in iterable if condition}
```


### Example:

Create a dictionary where keys are numbers 1 to 5 and values are their cubes.

```python
cubes = {x: x**3 for x in range(1, 6)}
print(cubes)  
# {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
```

Filter to include only numbers where cube is > 20:

```python
filtered_cubes = {x: x**3 for x in range(1, 6) if x**3 > 20}
print(filtered_cubes)  
# {3: 27, 4: 64, 5: 125}
```


***

## Small Project: Create a Student Grade Dictionary 🎓

**Goal:**
Given a list of student names and their scores, create a dictionary that stores each student’s name as the key and their grade (Pass/Fail) as the value based on if the score is ≥ 50.

### Step 1: Define the data

```python
students = ["Riya", "Aman", "Nina", "Sam"]
scores = [65, 45, 75, 30]
```


### Step 2: Use dictionary comprehension with condition

```python
grade_dict = {students[i]: ("Pass" if scores[i] >= 50 else "Fail") for i in range(len(students))}
print(grade_dict)
```


### Output:

```
{'Riya': 'Pass', 'Aman': 'Fail', 'Nina': 'Pass', 'Sam': 'Fail'}
```


***

## Practice Questions 🏆

1. Use list comprehension to create a list of even numbers between 1 and 20.
2. Use dictionary comprehension to create a dictionary of numbers (1 to 10) and their squares.
3. Modify the student project to add a "Distinction" grade for scores ≥ 75.

***

## Checklist for This Chapter ✅

- [x] Used list comprehension for creating lists
- [x] Used dictionary comprehension to build dictionaries
- [x] Applied conditions inside comprehensions
- [x] Built a practical small project application

***

You’re now ready to write elegant, efficient code with comprehensions! Keep experimenting and watch your programs get cleaner and faster! ✨

