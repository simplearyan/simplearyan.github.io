---
title: "📋 Lists in Python | Lesson 05"
author: Aryan
weight: 5
draft: false
summary: "Here's a summary of A Truly Beautiful Mind and answers to all the questions, presented for ease of understanding with emojis! 📚🤖 ..."
tags: ["Python", "Progmramming", "course"]
series_order: 5
cascade:
   hideFeatureImage: true

---


## 📋 Lists in Python

Lists are one of the most useful and flexible data structures in Python. They let you store collections of items—whether numbers, strings, or even other lists! Get ready to learn how to create, modify, and use lists like a pro. 🔥

***

## What is a List? 🧩

A **list** is an ordered collection of items enclosed in square brackets `[ ]`. You can store multiple values in one list.

```python
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40]
```


***

## Creating Lists ✍️

Lists can contain any type of data and even a mix of types!

```python
mixed_list = [1, "hello", True, 3.14]
empty_list = []
```


***

## Accessing Items in a List 🔎

Use **indexing** to access elements (starting at 0).

```python
print(fruits[^0])    # apple
print(fruits[-1])   # cherry (last item)
```


***

## Modifying Lists ✏️

You can change values, add new items, or remove items.

```python
# Change item
fruits[^1] = "blueberry"

# Add item (append adds to the end)
fruits.append("orange")

# Insert item at specific position
fruits.insert(1, "mango")

# Remove item by value
fruits.remove("apple")

# Remove item by position
del fruits[^2]
```


***

## List Operations 🔢

| Operation | Example | Result |
| :-- | :-- | :-- |
| Concatenate | `[^1][^2] + ` | `[^1][^2]` |
| Repeat | ` * 3` | `` |
| Length | `len(fruits)` | Number of items in list |
| Check membership | `"apple" in fruits` | `True` or `False` |


***

## Looping Through Lists 🔄

You can use a `for` loop to go through each item.

```python
for fruit in fruits:
    print(fruit)
```


***

## Practice Questions with Solutions 🏆

1. **Practice:** Create a list of your 3 favorite colors and print the first color.
    - **Solution:**

```python
colors = ["red", "green", "blue"]
print(colors)
```

2. **Practice:** Add the color "yellow" at the end of the list.
    - **Solution:**

```python
colors.append("yellow")
```

3. **Practice:** Remove the second item from the list.
    - **Solution:**

```python
del colors[^1]
```


***

## Step-by-Step Mini Project: Shopping List 🛒

Create a shopping list program that:

- Starts with empty list
- Adds 3 items to the list
- Prints all items to the user

**Solution:**

```python
shopping_list = []
shopping_list.append("milk")
shopping_list.append("bread")
shopping_list.append("eggs")

print("Your shopping list:")
for item in shopping_list:
    print("-", item)
```


***

## Checklist for This Chapter ✅

- [x] Created and accessed lists
- [x] Modified, added, and removed list items
- [x] Used list operations (concatenation, repetition)
- [x] Loop through lists for display

***

You’re mastering Python lists! Start collecting and organizing data with ease. Keep practicing by making playlists, scores, or task lists! 🎉

<div style="text-align: center">⁂</div>

[^1]: https://www.geeksforgeeks.org/python/python-syllabus/

[^2]: https://www.w3schools.com/python/python_syllabus.asp

